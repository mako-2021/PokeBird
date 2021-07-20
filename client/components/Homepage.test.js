import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import store from '../store'
import Homepage from './Homepage'
import { HashRouter as Router } from 'react-router-dom'
// import store from '../store'
// import { fetchRecentObs } from '../actions/observed'

// const fakeStore = {
//   dispatch: jest.fn(),
//   getState: jest.fn(),
//   subscribe: jest.fn()
// }

// jest.mock('../actions/observed', () => ({
//   fetchRecentObs: jest.fn()
// }))

// fakeStore.getState.mockImplementation(() => ({
//   observed: [
//     { speciesCode: 'easros1', comName: 'Eastern Rosella', lat: 37, lng: 175, locName: 'Auckland' }
//     // { speciesCode: 'tui123', comName: 'tui' },
//     // { speciesCode: 'kf123', comName: 'kingfisher' },
//     // { speciesCode: 'dunnoc1', comName: 'Dunnock' }
//   ]
// }))

// describe('<Homepage />', () => {
//   test('list out observed from redux', async () => {
//     render(<Provider store={fakeStore}><Homepage /></Provider>)
//     // waitFor(() => {

//     // })
//     const observed = await screen.getByTestId('bird')
//     expect(observed).toHaveLength(1)
//   })
// })

test('testing header is Map', () => {
  render(<Router><Provider store={store}><Homepage /></Provider></Router>)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch('Map')
})
