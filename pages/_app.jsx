import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from '../lib/get_page_context'
import getOrCreateStore from '../store'

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  constructor(props) {
    super(props)
    this.pageContext = getPageContext()
  }

  componentDidMount() {
    // remove server-side injected styles
    const styles = document.getElementById('server-side-style')
    if (styles && styles.parentNode) styles.parentNode.removeChild(styles)
  }

  render() {
    const { Component, pageProps, store } = this.props
    const { theme, sheetsManager, sheetsRegistry, generateClassName, } = this.pageContext

    return (
      <Container>
        <Provider store={store}>
          <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
              <CssBaseline />
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(getOrCreateStore)(CustomApp)
