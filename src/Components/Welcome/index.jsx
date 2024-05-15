import React from 'react';
import image from '../Welcome/image.png';
import styles from "./style.module.css"

export default function Welcome() {
   
    return (
        <img  src={image} alt='logo' className={styles.logo}  />
  );
}
