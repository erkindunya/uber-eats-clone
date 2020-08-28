import React, { useState, useEffect } from 'react';

import './App.css';
import AppNavbar from './AppNavbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RestaurantMenuPage from "./RestaurantMenuPage";
import Homepage from './Homepage';
import axios from "axios";
import ubereats from "./dataSource/ubereats.json"
import { getMenuUrl } from "./HelperFunctions"
import AppFooter from './AppFooter';

function App() {

  const apiUrl = "https://yemi-f.github.io/uber-eats-mock-api/ubereats.json";

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setRestaurants(ubereats);
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   setIsError(false);
  //   setIsLoading(true);
  //   axios
  //     .get(apiUrl)
  //     .then(restaurant => {
  //       setRestaurants(restaurant.data);
  //       setIsLoading(false)
  //       setIsError(false)
  //     })
  //     .catch(() => {
  //       setIsError(true)
  //       console.log("invalid API url")
  //     })
  // }, [setRestaurants]);

  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route exact path="/" render={props => (<Homepage {...props} restaurants={restaurants} isLoading={isLoading} />)} />
          {restaurants.map(restaurant => {
            return (
              <Route path={`/${getMenuUrl(restaurant.restaurantName)}`}
                render={props => (<RestaurantMenuPage {...props} restaurant={restaurant} />)}
              />
            )
          })}
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
