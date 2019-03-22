import React from 'react'
import PropTypes from 'prop-types'
import {
    AppBar,
    Toolbar,
    Button,
    Grid
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import Link from 'next/link';
const Header = props => {
  return (
  
          <AppBar >
              <Toolbar>
                   <Grid container alignItems="center" spacing={16}>
                         <Grid item>
                      <img src='/static/cdc.png' style={{ maxWidth: '100%', maxHeight: '60px' }} alt="LOGO CDC" />
                         </Grid>
                         <Grid item>
                         <Link href="/">
                          <Button className={props.classes.listLink}>
                              HOME
                            </Button>
                         </Link>
                
                         </Grid>
                    <Grid item>
                    <Link href="/login">
                          <Button className={props.classes.listLink}>
                              LOGIN
                            </Button>
                    </Link>
                      
                  </Grid>
                   </Grid>
              </Toolbar>
          </AppBar>
   
  )
}

Header.propTypes = {
   classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
