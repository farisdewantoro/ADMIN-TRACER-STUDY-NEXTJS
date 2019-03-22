import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head';
import Header from './header';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';

const Layout_1 = props => {
  return (
    <div>
      
          <Header/>
          <div className={props.classes.root}>
              {props.children}
          </div>
    </div>
  )
}

Layout_1.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Layout_1);
