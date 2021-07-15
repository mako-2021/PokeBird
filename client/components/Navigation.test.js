import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import Homepage from './Homepage'
import store from '../store'
import { fetchRecentObs } from '../actions/observed'

jest.mock('../actions/observed')

fetchRecentObs.mockImplementation(() => () => {})
