import React from "react";
import Ava from './../Image/alpha.jpg';
import styles from './../Styles/About.module.css'

export const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.form}>
                <div>
                    <img src={Ava} alt="" />
                </div>
                <div>
                    <h2>Шабалин Александр</h2>
                    <p>Фронтенд Разработчик</p>
                    <p>Сейчас я пытаюсь начать разбираться в програмированнии за счет создания даже этого сайта. <br></br> Пытаюсь пробовать что то новое для себя, например использование чистого css </p>
                    <p>Цель - раскачаться в разработке до такой стрепени чтобы я смог устроиться на работу</p>
                </div>
            </div>
        </div>
    )
}