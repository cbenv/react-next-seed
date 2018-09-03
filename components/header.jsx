import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
}

class Header extends Component {
  constructor(props) {
    super(props)
    const { classes } = props
    this.classes = classes
  }

  render() {
    return (
      <div className={`header ${this.classes.root}`}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={this.classes.flex}>
              React Next Seed
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default connect()(withStyles(styles)(Header))
