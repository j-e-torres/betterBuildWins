import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAllChampionsThunk } from '../redux/actions/championsAction';
import { fetchAllItemsThunk } from '../redux/actions/itemAction';

import Nav from './Nav';
import Customizer from './Customizer';
import Optimizer from './Optimizer';

class App extends Component {
  componentDidMount() {
    const { fetchChampions, fetchAllItems } = this.props;
    return Promise.all([fetchChampions(), fetchAllItems()]);
  }
  render() {
    return (
      <Router>
        <Route component={Nav} />
        <Route exact path="/" component={Optimizer} />
        <Route exact path="/customize" component={Customizer} />
        <Route exact path="/optimize/:optimizeFilter?" component={Optimizer} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchChampions: () => dispatch(fetchAllChampionsThunk()),
  fetchAllItems: () => dispatch(fetchAllItemsThunk())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
