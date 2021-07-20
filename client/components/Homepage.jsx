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
          console.log(observations)
          dispatch(setRecentObs(observations))
          return null
        })
    }
  }, [latitude, longitude])

  if (latitude == undefined && longitude == undefined) {
    return (
      <div className='loader'>
        <h2> <i className="fas fa-kiwi-bird"></i> Map is loading... <i className="fas fa-kiwi-bird"></i> </h2>
        {/* <BounceLoader color={'blue'} size={60} /> */}
      </div>
    )
  }

  return (
    <>
      <h3 style={{ textAlign: 'center' }}> <i className="fas fa-search-location"></i> Reports of the recent bird viewings in New Zealand. Source: eBird </h3>
      <div id="map" style={{ display: 'block', margin: '0 auto', height: '500px', width: '500px' }}>
        <MapContainer center={[-40.90, 174.77]} zoom={5} scrollWheelZoom={true} style={{ height: '500px', width: '500px' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-41.29, 174.77]}>

            <Tooltip
              offset={[0, 20]}
              direction='bottom'
              opacity={1}
              className='bird-info-wellington'
              permanent={false}
            >
              <div className='bird-info-text-wellington'>Wellington</div>
            </Tooltip>

          </Marker>

          {observed.map((observation, i) => <Marker data-testid='bird' icon={icon} key={i} position={[observation.lat, observation.lng]}>

            <Tooltip
              offset={[0, 20]}
              direction='bottom'
              className='bird-info'
              opacity={1}
            >
              <TooltipImage sciName={observation.sciName} />
              <br />
              <h3>{observation.comName}</h3>
              <p> Location: <br /> {observation.locName} <br /> Date: <br /> {observation.obsDt}</p>
            </Tooltip>

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
