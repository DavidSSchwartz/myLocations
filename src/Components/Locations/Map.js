// // import React, {Component} from 'react';
// // import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// // export class MyMapComponent extends Component{  

// // render(){
// //   console.log(this.props.latitude, this.props.longitude)
// //  return(
// //   <div>
// //           {withScriptjs(withGoogleMap((props) =>
// //           <GoogleMap
// //             defaultZoom={8}
// //             defaultCenter={{ lat: 31.498946, lng: 34.870606 }}
// //           >
// //             {props.isMarkerShown && <Marker position={{ lat: this.props.latitude, lng: this.props.longitude}} />}
// //           </GoogleMap>
// //           ))}
// //       </div>
// //     )
// //   }
// // }

// // // class TheMarker extends Component{
// // //   render(){
// // //     console.log(this.props)
// // //     return(

// // //          <Marker position={{ lat: this.props.latitude, lng: this.props.longitude}} />
// // //       )
// // //   }
// // // }
// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyD4rfjUlbkGQl0UBaCnGTuGJN22Ig50DS8"}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

// const APIkey= "AIzaSyD4rfjUlbkGQl0UBaCnGTuGJN22Ig50DS8"



import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 8 }
        initialCenter = {{ lat: 31.498946, lng: 34.870606 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat: this.props.latitude || 31.498946, lng: this.props.longitude || 34.870606 }}
          name = { 'Changing Colors Garage' }
        />
        
          
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (process.env.AIzaSyD4rfjUlbkGQl0UBaCnGTuGJN22Ig50DS8)
})(GoogleMapsContainer)