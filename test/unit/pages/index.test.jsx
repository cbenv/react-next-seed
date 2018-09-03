import { render } from 'enzyme'
import React from 'react'
import configureStore from 'redux-mock-store'

import HomePage from '../../../pages/index'

describe('Home Page', () => {
  const initialState = { counter: 0 }
  const mockStore = configureStore()
  let store
  let app

  beforeEach(() => {
    store = mockStore(initialState)
    app = render(<HomePage store={store} />)
  })

  it('consists of one header', () => {
    expect(app.find('.header')).toHaveLength(1)
  })

  it('consists of one counter', () => {
    expect(app.find('.counter')).toHaveLength(1)
  })
})
