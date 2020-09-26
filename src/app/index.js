import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchChampions } from '../store/championsSlice';
import { fetchItems } from '../store/itemsSlice';
import { getVersion } from '../api/ddragonAPI';

import { Header } from './components/Header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAll = async () => {
      const version = await getVersion();

      dispatch(fetchItems(version));
      dispatch(fetchChampions(version));
    };

    return fetchAll();
  });

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Customize} />
        <Route exact path="/customize" component={Customize} /> */}
        {/* <Route
            exact
            path="/optimize/:optimizeFilter?"
            component={Optimizer}
          /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
