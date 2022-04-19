import ReactMapGL from 'react-map-gl'

export default function Map() {
  return (
    <>
      <ReactMapGL
        initialViewState={{
          longitude: -46.67051,
          latitude: -23.4888,
          zoom: 14
        }}
        style={{ width: 600, height: 100 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken='pk.eyJ1IjoiZWxpYXMtbWF1cm8xIiwiYSI6IklKS0JRVGsifQ._kx6FA2dBWJOPaqZSP4IWw' />
    </>

  )
}
