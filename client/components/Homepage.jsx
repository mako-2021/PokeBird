import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { usePosition } from 'use-position'
import { fetchRecentObs, setRecentObs } from '../actions/observed'
import { connect } from 'react-redux'

function Homepage (props) {
  const { observed, dispatch } = props // extracting observed, dispatch from props.
  const watch = true
  const { latitude, longitude } = usePosition(watch)

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
      <h1>Map</h1>
      <div id="mapid" style={{ height: '400px', width: '400px' }}>
        <MapContainer center={[-40.90, 174.77]} zoom={5} scrollWheelZoom={true} style={{ height: '400px', width: '400px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-41.29, 174.77]}><Popup>Wellington</Popup></Marker>
          {observed.map((observation, i) => <Marker key={i} position={[observation.lat, observation.lng]}></Marker>)}
        </MapContainer>
      </div>
      <div>
        <ul>
          {observed.map((observation, i) => (
            <li key={i}>{observation.comName}, {observation.lat}, {observation.lng}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return { observed: state.observed }
}

export default connect(mapStateToProps)(Homepage)
