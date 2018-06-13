import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 31.498946, lng: 34.870606 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 31.498946, lng: 34.870606 }} />}
  </GoogleMap>
))


 