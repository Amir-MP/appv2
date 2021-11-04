import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { geolocated } from "react-geolocated";


const DEFAULT_LONGITUDE = 53;
const DEFAULT_LATITUDE = 32;
class UserLocation extends React.Component {
  render() {
    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;

    return (
      <Map center={[latitude, longitude]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></TileLayer>

        {!this.props.coords ? (
          <div className="loading">Loading...</div>
        ) : (
          <Marker position={[latitude, longitude]}>
            <Popup>شما اینجا هستید</Popup>
            {console.log(longitude)}
            {console.log(latitude)}
          </Marker>
        )}
      </Map>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(UserLocation);
