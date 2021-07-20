import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import App from './App'
import store from '../store'
import { HashRouter as Router } from 'react-router-dom'

test('This is an h1 test', () => {
  render(<Router><Provider store={store}><App /></Provider></Router>)
  const headings = screen.getAllByRole('heading')
  expect(headings[0].innerHTML).toMatch(/This is a test/)
})

// test('renders an <li> for each fruit', () => {
//   const fruits = ['orange', 'persimmons', 'kiwi fruit']
//   jest.spyOn(store, 'getState')
//   store.getState.mockImplementation(() => ({ fruits }))

//   render(<Provider store={store}><App /></Provider>)
//   const li = screen.getAllByRole('listitem')
//   expect(li).toHaveLength(3)
// })

// test('dispatches fetchFruits action', () => {
//   render(<Provider store={store}><App /></Provider>)
//   expect(fetchFruits).toHaveBeenCalled()
// })
