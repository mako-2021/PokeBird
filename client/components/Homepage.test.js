import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import Homepage from './Homepage'
import store from '../store'
import { fetchRecentObs } from '../actions/observed'

const fakeStore = {
  dispatch: jest.fn,
  getState: jest.fn,
  subscribe: jest.fn
}

jest.mock('../actions/observed', () => ({
  fetchRecentObs: jest.fn
}))

fakeStore.getState.mockImplementation(() => {
  {speciesCode:'easros1',comName…91802490'},
  {speciesCode:'dunnoc1',comName…91802490'},
  {speciesCode:'comcha',comName:…91802490'},
  {speciesCode:'sonthr1',comName…91802490'},
  {speciesCode:'houspa',comName:…91802490'}
})

// fetchRecentObs.mockImplementation(() => () => {})

test('testing header is Map', () => {
  render(<Provider store={store}><Homepage /></Provider>)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch('Map')
})

test('observed.length === markers on map', () => {

})
