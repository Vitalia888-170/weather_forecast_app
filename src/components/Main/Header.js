import React, { useContext, useState, useEffect } from 'react';
import { BsGeoAlt, BsSearch } from "react-icons/bs";
import { dateBuilder } from '../../common/DateBuilder/DateBuilder';
import { AppContext } from '../../context';
import { Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router';


export const Header = ({ weather }) => {
   const { getUserEnteredWeather, location, currentUser, userLogout } = useContext(AppContext);
   const [isShow, setIsShow] = useState(false);
   const [isOpenSidebar, setIsOpenSidebar] = useState(false);
   let locat = JSON.parse(localStorage.getItem("location"));
   let history = useHistory();
   const logout = async() => {
      await userLogout();
      history.push("/login");
   }
   return (
      <div className="header">
         <div className="header-geo">
            <div className="geo">
               <BsGeoAlt className="geo-icon" />
               {
                  location
                     ? <h5>{location.city}, {location.country}</h5>
                     : <h5>{locat.city}, {locat.country}</h5>
               }
            </div>
            <h5>{dateBuilder(weather[0].dt)}</h5>
         </div>
         <div className={isOpenSidebar ? "header-search-block open" : "header-search-block"}>
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
                     <div className="header-field-wrapper">
                        <BsSearch className={isShow ? 'search-icon' : 'search-icon move'} onClick={() => setIsShow(true)} />
                        <div className={isShow ? 'search-content show' : 'search-content hide'}>
                           <Field type="text" className={errors.city ? "validate-error" : null} name="city" placeholder="Enter city name" />
                           <button type="submit" disabled={isSubmitting}>Search</button>
                        </div>
                     </div>
                  </Form>
               )}
            </Formik>
            <p onClick={logout} className="logout">Logout</p>
            <div className="close-block" onClick={() => setIsOpenSidebar(false)}></div>
         </div>
         <div className={!isOpenSidebar && "burger"} onClick={() => setIsOpenSidebar(true)}>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
   )
}

