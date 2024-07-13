import React from "react";
import TG from "./../Image/teleg.png"
import VK from "./../Image/vk.png"
import Git from "./../Image/GIT.png"
import styles from './../Styles/Connect.module.css'

export const Connect = () => {
    return(
        <div>
            <div className={styles.title}>
                <p>Способы связаться со мной</p>
            </div>
            <div className={styles.general}>
                <div className={styles.separate}>
                    <img src={TG} alt="" />
                    <p>t.me/R1ch1111</p>
                </div>
                <div className={styles.separate}>
                    <img src={VK} alt="" />
                    <p>vk.com/r1ch111</p>
                </div>
                <div className={styles.separate}>
                    <img src={Git} alt="" />
                    <p>github.com/R1ch1131</p>
                </div>
            </div>
        </div>
    )
}