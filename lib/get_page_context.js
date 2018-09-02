/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss'
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  pallete: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    seconday: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
})
const sheetsManager = new Map()
const sheetsRegistry = new SheetsRegistry()
const generateClassName = createGenerateClassName()

const createPageContext = () => {
  return {
    theme,
    sheetsManager,
    sheetsRegistry,
    generateClassName,
  }
}

const getPageContext = () => {
  // server side
  if (!process.browser) {
    return createPageContext()
  }
  // client side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }
  return global.__INIT_MATERIAL_UI__
}

export default getPageContext
