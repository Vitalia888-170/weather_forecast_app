import React, { useContext, useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AppContext } from '../../context';
import { Redirect } from 'react-router-dom';


export const SearchPage = () => {
   const { getUserEnteredWeather, getCurrentLocationWeather, isLoading, errorMessage, currentUser} = useContext(AppContext);
   if (isLoading===true && currentUser) {
      return <Redirect to="/weather" />
   }
//    useEffect(() => {
//       localStorage.setItem('location', JSON.stringify({city:location.city, country:location.country}));
// }, []);

   const getCurrentLocation = () => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getCurrentLocationWeather(+lat.toFixed(2), +lon.toFixed(2));
         });
      } else {
         console.log("Geolocation is not supported by this browser.");
      }
   }
      return (
         <div className="search-page">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            <h4>Welcome</h4>
            <div className="searching-block">
               <div className="searching-block-content">
               <div className="weather-bg"></div>
               <Formik
                  initialValues={{ city: '' }}
                  validate={values => {
                     const errors = {};
                     if (!values.city) {
                        errors.city = "Required"
                     }
   
   
                     return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                     getUserEnteredWeather(values.city);
                  }}
               >
                  {({ errors, isSubmitting }) => (
                     <Form>
                        <div className="field-wrapper">
                           <Field type="text" className={errors.city ? "validate-error" : null} name="city" placeholder="Enter city name" />
                           {errors.city
                              ? <BiErrorCircle className="search-validate-icon error-icon" />
                              : <AiOutlineCheckCircle className="search-validate-icon checked-icon" />
                           }
                        </div>
                        <button type="submit" disabled={isSubmitting}>Search</button>
                        <button className="location-btn" type="button" onClick={getCurrentLocation}>Your location</button>
                     </Form>
                  )}
               </Formik>
               </div>
            </div>
         </div>
      )
}
