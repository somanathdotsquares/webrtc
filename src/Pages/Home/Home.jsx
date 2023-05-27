import React from "react";
import { BrowserRouter, Link, Route,useNavigate} from "react-router-dom";

import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/Button/Button";
const Home = () => {
  //inline style for link
  const signIntTextstyle={
    color:'#0077ff',
    fontWeight:'bold',
    textDecoration:'none',
    marginLeft:'10px',
  }

  const navigate=useNavigate ();
//create function
  function startRegistration(){
    navigate('/register');
    console.log("clicked on button...");
  }



  return (
   <div className={styles.cardWrapper}>
    <Card title="!! Welcome !!" icon="Emojilogo">
    <p className={styles.text}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
      <div>
      
      
      <Button onClick={startRegistration} text="Get your username"></Button>
      
      </div>
      <div className={styles.signinWrapper}>
        <span className={styles.haveInvite}> Do you hava an account?</span>
        <Link style={signIntTextstyle} to='/login'>Sign in</Link>
      </div>
    </Card>
     
   </div>
  );
};

export default Home;
