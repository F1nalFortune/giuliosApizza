import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component {
  static defaultProps = {
    marker: {
      lat: 41.341431,
      lng: -72.862487,
      img_src: './one.jpg'
    },
    center: {
      lat: 41.341431,
      lng: -72.862487
    },
    zoom: 14
  };

  componentDidMount(){
    this.setState({
      marker: {lat: 41.341431, lng: -72.862487, img_src: './one.jpg'},
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '250px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB2w5szLTg023cRlAYn7RiMnGCWfxFShvk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
