import React from "react";
import image from '../../../assets/images/Logo.png'
import styles from './Logo.module.css'

const Logo = () => (
    <div className={styles.Logo}>
        <img src={image} alt="iran"/>
    </div>
);

export default Logo;