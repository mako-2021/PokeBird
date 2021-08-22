import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import { usePosition } from 'use-position'
import { fetchRecentObs } from '../actions/observed'
import { connect } from 'react-redux'
import L from 'leaflet'
import TooltipImage from './TooltipImage'

function Homepage (props) {
  const { observed, dispatch } = props
  const watch = true
  const { latitude, longitude } = usePosition(watch)

  // const legend = L.control({ position: 'bottomright' });

  // legend.onAdd = function (map) {

  //   let div = L.DomUtil.create('div', 'info legend')

  //   for (var i = 0; i < grades.length; i++) {
  //     div.innerHTML = 'text';
  //   }

  //   return div;
  // };

  // map = MapContainer
  // legend.addTo(map);

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

  if (latitude === undefined && longitude === undefined) {
    return null
  }

  return (
    <>
      <div id="map" style={{ display: 'block', margin: 'auto', height: '500px', width: '500px', paddingTop: '30px' }}>
        <MapContainer center={[-40.90, 174.77]} zoom={5} scrollWheelZoom={true} zoomControl={false} style={{ height: '500px', width: '500px' }}>
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
              <p> <strong>Location:</strong> <br />{observation.locName}<br /><strong>Date: </strong><br />{observation.obsDt}</p>
            </Tooltip>
          </Marker>)}
        </MapContainer>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return { observed: state.observed }
}

export default connect(mapStateToProps)(Homepage)
