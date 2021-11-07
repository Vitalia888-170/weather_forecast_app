import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AccountBox } from './components/AccountsBox/AccountBox';
import { SearchPage } from './components/Main/SearchPage';
import { Weather } from './components/Main/Weather';
import { AppContext } from './context';
import { auth, authUser } from './firebase';



const App = () => {
  const { dailyCurrentWeather, currentUser, setCurrentUser, setDailyWeather } = useContext(AppContext);
  let weatherDBObject = JSON.parse(localStorage.getItem("weather"));
  useEffect(()=>{
    setDailyWeather(weatherDBObject);
  },[])
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user.email);
        console.log("user login");
      } else {
        setCurrentUser(null);
        console.log('user logout');
      }
    })
  }, [currentUser]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/search"
            component={() => <SearchPage />}
          />
          <Route path="/login"
            component={() => <AccountBox />}
          />
          <Route path="/weather"
            component={() => <Weather weather={dailyCurrentWeather ? dailyCurrentWeather : weatherDBObject} />}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default App;