import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './Map.module.css';

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 50.450252,
      lng: 30.523937,
    },
    zoom: 16,
  };

  state = {};

  render() {
    const { center, zoom } = this.props;

    return (
      <div className={styles.map}>
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom} />
      </div>
    );
  }
}
