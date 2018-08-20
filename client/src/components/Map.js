import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import one from './one.jpg';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    <img src={one} alt="Logo" />
  </div>
);

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
          <AnyReactComponent
            lat={41.341431}
            lng={-72.862487}
            img_src={this.props.marker.img_src}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
