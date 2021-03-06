/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PageList.css';
import SidebarBio from '../SidebarBio/SidebarBio';

class PageList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  componentDidMount() {
     fetch('/talks') // fetch from Express.js server
      .then(response => response.json())
      .then(result => console.log("Yeah!", result));
  }

  render() {
    const { title, html } = this.props;
    console.log("Props: ", this.props);

    return (
      <div className={s.root}>
        <SidebarBio />
        <div className={s.container}>
          <h1>{title}</h1>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PageList);
