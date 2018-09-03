import React from 'react'
import { render } from 'enzyme'
import { create } from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import HomePage from '../../../pages/index'

describe('Home Page', () => {
  const initialState = { counter: 0 }
  const mockStore = configureStore()
  let store
  let app
  let tree

  beforeEach(() => {
    store = mockStore(initialState)
    app = render(<HomePage store={store} />)
    tree = create(<HomePage store={store} />).toJSON()
  })

  it('consists of one header', () => {
    const header = app.find('.header')
    expect(header).toHaveLength(1)
  })

  it('consists of one counter', () => {
    const counter = app.find('.counter')
    expect(counter).toHaveLength(1)
  })

  it('renders to match snapshot', () => {
    expect(tree).toMatchSnapshot()
  })
})
