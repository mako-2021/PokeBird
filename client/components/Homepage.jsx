import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { usePosition } from 'use-position'
import { fetchRecentObs, setRecentObs } from '../actions/observed'
import { connect } from 'react-redux'
import L from 'leaflet'
import TooltipImage from './TooltipImage'

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
        .then(observations => {
          dispatch(setRecentObs(observations))
          return null
        })
    }
  }, [latitude, longitude])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Reports of the recent bird viewings in New Zealand. Source: eBird </h1>
      <div id="mapid" style={{ display: 'block', margin: '0 auto', height: '600px', width: '600px' }}>
        <MapContainer center={[-40.90, 174.77]} zoom={6} scrollWheelZoom={true} style={{ height: '600px', width: '600px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-41.29, 174.77]}>
            <div id="customTooltip">
              <Tooltip
                offset={[0, 20]}
                direction='bottom'
              >
                Wellington
              </Tooltip>
            </div>
          </Marker>

          {observed.map((observation, i) => <Marker data-testid='bird' icon={icon} key={i} position={[observation.lat, observation.lng]}>
            <div className="customTooltip">
              <Tooltip
                offset={[0, 20]}
                direction='bottom'
              >
                <TooltipImage sciName={observation.sciName} />
                <br />
                <h3>{observation.comName}</h3>
                <p>{observation.sciName}</p>
                <p> seen at {observation.locName} on {observation.obsDt}</p>
              </Tooltip>
            </div>
          </Marker>)}
        </MapContainer>
      </div>
    </>
  )
}

function mapStateToProps(state) {
  return { observed: state.observed }
}

export default connect(mapStateToProps)(Homepage)
