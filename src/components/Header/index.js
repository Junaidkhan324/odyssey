import React from 'react'
import styles from "../Header/header.module.css"
// import Images from ""
import logo from "../../assets/logo-img.png";
function Header() {
    return (
        <header>
            <div className={styles.container}>
                <a href="#" className={styles.logo}>
                    <img src={logo} alt="logo" />
                </a>
                <nav>
                    <a href="#">BIKS</a>
                    <a href="#">SERVICE</a>
                    <a href="#">ABOUT</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
