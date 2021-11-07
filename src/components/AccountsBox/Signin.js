import React, { useContext , useState, useEffect} from 'react'
import { Formik, Form, Field } from 'formik';
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AppContext } from '../../context';

export const Signin = ({ changeAuth }) => {
   const { userSignin} = useContext(AppContext);
   
   
   return (
      <div className="account signin">
         <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
               const errors = {};
               if (!values.email) {
                  errors.email = 'Enter your email';
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = 'Invalid email address';
               }
               if (!values.password) {
                  errors.password = 'You must enter password';
               } else if (values.password.length < 6) {
                  errors.password = 'Too short password length';
               }
               return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               userSignin(values.email, values.password);
            }}
         >
            {({ errors, isSubmitting }) => (
               <Form>
                  <div className="field-wrapper">
                     <Field type="email" className={errors.email ? "validate-error" : null} name="email" placeholder="Email" />
                     {errors.email
                        ? <BiErrorCircle className="account-icon error-icon" />
                        : <AiOutlineCheckCircle className="account-icon checked-icon" />
                     }
                  </div>
                  <div className="field-wrapper">
                     <Field type="password" className={errors.password ? "validate-error" : null} name="password" placeholder="Password" />
                     {errors.password
                        ? <BiErrorCircle className="account-icon error-icon" />
                        : <AiOutlineCheckCircle className="account-icon checked-icon" />
                     }
                  </div>
                  {errors ? <p className="error-msg">{errors.email || errors.password || errors.verify_password}</p> : null}
                  <button type="submit" className="account-btn" disabled={isSubmitting}>Signin</button>
                  <div className="account-inform">
                     <span>Don`t have an account?</span>
                     <span onClick={changeAuth} className="account-link"> Signup</span>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}
