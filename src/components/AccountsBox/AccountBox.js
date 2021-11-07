import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Signin } from "./Signin";
import { Signup } from "./Signup";
import { motion } from "framer-motion";
import { AppContext } from '../../context';
import { Redirect } from 'react-router-dom';


const BackDrop = styled(motion.div)`
width:190%;
height:600px;
display:flex;
flex-direction:column;
border-radius:50%;
background-color: #fde7f9;
 background-image: linear-gradient(315deg, #f3d0ed 0%, #68a6eec7 74%);
transform:rotate(20deg);
position:absolute;
top:-390px;
left:-150px;
z-index:20;
@media(max-width:520px){
  width:800px;
  position:fixed;
  top:-380px;
  left:-200px;
}
@media(max-width:300px){
  top:-350px;
  left:-120px;
}
`
const DropContainer = styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
`
const Title = styled.h2`
font-family: "Concert One", cursive;
font-size:38px;
color:#fff;
letter-spacing:3px;
z-index:22;
position:absolute;
top:30px;
left:30px;
`
const Subtitle = styled.p`
font-family: "Concert One", cursive;
font-size:14px;
color:#fff;
letter-spacing:1px;
z-index:22;
position:absolute;
top:140px;
left:30px;

`
const variantsDrop = {
   initial: {
      width: "180%",
      height: "600px",
   },
   completely: {
      width: "300%",
      height: "200%"
   }
}
const transition = {
   type: "spring",
   stiffness: 30,
   duration: 2.2,
}

export const AccountBox = () => {
   const [isExpanded, setIsExpanded] = useState(false);
   const [page, setPage] = useState("signin");
  
   const { currentUser, errorMessage, setErrorMessage } = useContext(AppContext);
   if (currentUser) {
      return <Redirect to="/search" />
   }

   const expandDrop = () => {
      setIsExpanded(true);
      setTimeout(() => {
         setIsExpanded(false);
      }, transition.duration * 1000 - 1500);
   }
   const goToSignup = () => {
      expandDrop();
      setTimeout(() => {
         setPage("signup");
      }, 500)
   }
   const goToSignin = () => {
      expandDrop();
      setTimeout(() => {
         setPage("signin");
      }, 500)
   }
   return (
      <div>
           {errorMessage && <p className="error-message">{errorMessage}</p>}
         <div className="account-container">
            <DropContainer>
               {page === "signup"
                  ? <Title>Create your Account</Title>
                  : <Title>Welcome back</Title>
               }
               {page === "signup"
                  ? <Subtitle>Please sign-up to continue!</Subtitle>
                  : <Subtitle>Please sign-in to continue!</Subtitle>
               }
               <BackDrop
                  initial={false}
                  animate={isExpanded ? "completely" : "initial"}
                  variants={variantsDrop}
                  transition={transition} />
            </DropContainer>
            {page === "signup" 
            ? <Signup changeAuth={goToSignin} /> 
            : <Signin changeAuth={goToSignup} />}
         </div>
      </div>
   )
}
