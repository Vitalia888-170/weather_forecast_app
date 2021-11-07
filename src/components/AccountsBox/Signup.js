import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AppContext } from '../../context';

export const Signup = ({ changeAuth }) => {

   const { userSignup } = useContext(AppContext);

   return (
      <div className="account signup">
         <Formik
            initialValues={{ email: '', password: '', verify_password: '' }}
            validate={values => {
               const errors = {};
               if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
               }
               if (!values.password) {
                  errors.password = 'You must enter password';
               } else if (values.password.length < 6) {
                  errors.password = 'Too short password length';
               }
               if (!values.verify_password) {
                  errors.verify_password = 'You must confirm password above';
               } else if (values.password !== values.verify_password) {
                  errors.verify_password = 'Different password value';
               }
               return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               userSignup(values.email, values.password);
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
                  <div className="field-wrapper">
                     <Field type="password" className={errors.password ? "validate-error" : null} name="verify_password" placeholder="Verify password" />
                     {errors.verify_password
                        ? <BiErrorCircle className="account-icon error-icon" />
                        : <AiOutlineCheckCircle className="account-icon checked-icon" />
                     }
                  </div>
                  {errors ? <p className="error-msg">{errors.email || errors.password || errors.verify_password}</p> : null}

                  <button type="submit" className="account-btn"  disabled={isSubmitting}>Signup</button>
                  <div className="account-inform">
                     <span>Already have an account?</span>
                     <span className="account-link" onClick={changeAuth}> Signin</span>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   )
}
