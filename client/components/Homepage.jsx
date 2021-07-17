import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { usePosition } from 'use-position'
import { fetchRecentObs, setRecentObs } from '../actions/observed'
import { connect } from 'react-redux'
import L from 'leaflet'

function Homepage(props) {
  const { observed, dispatch } = props
  const watch = true
  const { latitude, longitude } = usePosition(watch)

  const icon = L.icon({
    iconUrl: '/images/binoculars.png', // need to use credits: <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    iconSize: [20, 20]
  })

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      return fetchRecentObs()
        .then(observed => {
          dispatch(setRecentObs(observed))
          return null
        })
    }
  }, [latitude, longitude])


  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Map of recent bird viewings in New Zealand Source: eBird </h1>
      <div id="mapid" style={{ height: '600px', width: '600px' }}>
        <MapContainer center={[-40.90, 174.77]} zoom={6} scrollWheelZoom={true} style={{ height: '600px', width: '600px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-41.29, 174.77]}>
            <Tooltip>Wellington</Tooltip>
          </Marker>
          {observed.map((observation, i) => <Marker data-testid='bird' icon={icon} key={i} position={[observation.lat, observation.lng]}>
            <Tooltip>{observation.comName} <br /> seen at {observation.locName} <br /> on {observation.obsDt}</Tooltip></Marker>)}
        </MapContainer>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return { observed: state.observed }
}

export default connect(mapStateToProps)(Homepage)
