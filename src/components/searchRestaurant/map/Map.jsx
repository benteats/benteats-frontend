import { useEffect, useState } from 'react'
import { Pin } from '../../../pages/searchRestaurant/SearchRestaurant.style'
import { apikey } from '../../../data/config'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapGL({ searchPlace, restaurantsResult }) {
  const [viewState, setViewState] = useState({
    longitude: -46.67051,
    latitude: -23.4888,
    zoom: 13.5
  })

  const styleMap = {
    width: '100%',
    height: '100%'
  }

  useEffect(() => {
    if (Object.values(searchPlace).every(o => o !== '')) {
      setViewState(searchPlace)
    }
  }, [searchPlace])

  return (
    <>
      <Map
        {...viewState}
        onMove={e => setViewState(e.viewState)}
        style={styleMap}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={apikey}
      >
        {restaurantsResult && restaurantsResult.map(result => (
          <div key={result.lat} >
            <Marker longitude={result.lng} latitude={result.lat}>
              <Pin />
            </Marker>
          </div>
        ))}
      </Map>
    </>
  )
}
