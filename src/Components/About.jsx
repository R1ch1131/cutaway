import React from "react";
import "./../Styles/index.css"
import Ava from './../Image/ava.jpg';
import Css from './../Image/CSS.png';
import Git from './../Image/GIT.png';
import Html from './../Image/HTML.png';
import Js from './../Image/JS.png';
import Next from './../Image/NEXT.png';
import Reactp from './../Image/REACT.png';


export const About = () => {
    return(
        <div className="fade">
            <div className="about">
                <div>
                    <img className="ava" src={Ava} alt="ava" />
                </div>
                <div className="info">
                    <p className="name">Шабалин Александр Николаевич</p>
                    <p>Фронтенд Разработчик</p>
                    <p>Сейчас я пытаюсь начать разбираться в програмированнии за счет создания даже этого сайта. <br></br> Пытаюсь пробовать что то новое для себя, например использование чистого css </p>
                    <p>Цель - раскачаться в разработке до такой стрепени чтобы я смог устроиться на работу</p>
                </div>
            </div>
            <div className="purpose">
                <p className="text-purpose">То в чем хочу хорошо разобраться</p>
                <img className="picture" src={Js} alt="js" />
                <img className="picture" src={Html} alt="html" />
                <img className="picture" src={Css} alt="css" />
                <img className="picture1" src={Reactp} alt="react" />
                <img className="picture1" src={Git} alt="git" />
                <img className="picture1" src={Next} alt="next" />
            </div>
        </div>
    )
}