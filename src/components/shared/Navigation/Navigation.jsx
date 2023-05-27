import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  const brandStyle={
    color:'#fff',
    Textdecoration:'none',
    fontWeight:'bold',
    fontSize:'22px',
    display:'flex',
    alignItems:'center'
  };
  const logoText={
      marginLeft:'10px'
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to={'/'}></Link>
      <img src='/images/Emojilogo.png' alt='logo'/>
      <span  style={logoText}>MyPro</span>
    </nav>
  )
}

export default Navigation