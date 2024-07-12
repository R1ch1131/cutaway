import React from "react";
import "./../Styles/index.css"
import Ava from './../Image/alpha.jpg';

export const About = () => {
    return(
        <div className="ret">
            <div className="about flex">
                <div>
                    <img className="ava" src={Ava} alt="" />
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