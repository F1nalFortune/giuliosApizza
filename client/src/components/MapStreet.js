import React, { Component } from 'react';
import ReactStreetview from 'react-streetview';

const googleMapsApiKey = 'AIzaSyB2w5szLTg023cRlAYn7RiMnGCWfxFShvk';

const streetViewPanoramaOptions = {
  position: {lat: 41.341431, lng: -72.862487},
  pov: {heading: -25, pitch: -3},
  zoom: 1
};

class MapStreet extends Component {


  render() {
    return (
			<div style={{
				width: '100%',
				height: '250px',
				backgroundColor: '#eeeeee'
			}}>
				<ReactStreetview
					apiKey={googleMapsApiKey}
					streetViewPanoramaOptions={streetViewPanoramaOptions}
				/>
			</div>
		);
  }
}

export default MapStreet;
