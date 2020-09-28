import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchChampions } from '../store/championsSlice';
import { fetchItems } from '../store/itemsSlice';
import { fetchVersion } from '../store/apiVersionSlice';
import { getVersion } from '../api/ddragonAPI';

import './index.scss';

import Header from './components/Header';
import NotFound from './components/NotFound';
import Customize from './containers/Customize';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAll = async () => {
      const version = await getVersion();

      dispatch(fetchItems(version));
      dispatch(fetchChampions(version));
      dispatch(fetchVersion(version));
    };

    fetchAll();
  });

  return (
    <BrowserRouter>
      <main className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Customize} />
          <Route exact path="/customize" component={Customize} />
          <Route component={NotFound} />

          {/* <Route
            exact
            path="/optimize/:optimizeFilter?"
            component={Optimizer}
          /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
