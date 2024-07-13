import React from "react";
import Css from './../Image/CSS.png';
import Html from './../Image/HTML.png';
import Js from './../Image/JS.png';
import Reactp from './../Image/REACT.png';
import styles from './../Styles/Wish.module.css'

export const Wish = () =>{
    return(
        <div className={styles.background}>
            <p className={styles.title}>То в чем хочу развиваться</p>
            <div className={styles.general}>
                <div className={styles.separate}>
                    <img src={Js} alt="js" />
                    <p>JavaScript — это интерпретируемый язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений.</p>
                </div>
                <div className={styles.separate}>  
                    <img src={Html} alt="html" />
                    <p>HTML (HyperText Markup Language) — это язык гипертекстовой разметки текста.Он используется для размещения на веб-странице элементов: текста, картинок, таблиц и видео.</p>
                </div>
                <div className={styles.separate}>
                    <img src={Css} alt="css" />
                    <p>CSS (Cascading Style Sheets) — это язык описания внешнего вида документа. Он отвечает за то, как выглядят веб-страницы: цвет фона и декоративных элементов, размер и стиль шрифтов.</p>
                </div>
                <div className={styles.separate}>
                    <img src={Reactp} alt="react" />
                    <p>React.js — это JavaScript-библиотека от «Фейсбука»* для удобной разработки интерфейсов, то есть внешней части сайтов и приложений, с которой взаимодействует пользователь.</p>
                </div>
            </div>
        </div>
    )
}