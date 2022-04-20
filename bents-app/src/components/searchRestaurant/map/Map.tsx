import { useState } from 'react'
import Map, { Marker } from 'react-map-gl';
import { Pin } from '../../../pages/searchRestaurant/SearchRestaurant.style';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxpYXMtbWF1cm8xIiwiYSI6IklKS0JRVGsifQ._kx6FA2dBWJOPaqZSP4IWw'; // Set your mapbox token here


export default function MapGL() {
  const [viewState, setViewState] = useState({
    longitude: -46.67051,
    latitude: -23.4888,
    zoom: 14,
  })

  const styleMap = {
    width: '100%',
    height: '100%'
  }

  return (
    <>
      <Map
        {...viewState}
        onMove={e => setViewState(e.viewState)}
        style={styleMap}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-46.67051} latitude={-23.4888}>
          <Pin />
        </Marker>
      </Map>
    </>

  )
}
