import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchAllChampionsThunk } from '../redux/actions/championsAction'
import { fetchAllItemsThunk } from '../redux/actions/itemAction'

import Header from './Header'
import Home from './Home'
import Customizer from './Customizer'
// import CalculateBuild from './CalculateBuild'

class App extends Component {
  componentDidMount() {
    const { fetchChampions, fetchAllItems } = this.props
    return Promise.all([fetchChampions(), fetchAllItems()])
  }
  render() {
    return (
      <Router>
        <Route component={Header} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/customize" component={Customizer} />
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChampions: () => dispatch(fetchAllChampionsThunk()),
  fetchAllItems: () => dispatch(fetchAllItemsThunk())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
