import React from "react";
import './../Styles/index.css'
import TG from "./../Image/teleg.png"
import VK from "./../Image/vk.png"
import Git from "./../Image/git.png"

export const Connect = () => {
    return(
        <div>
            <div className="text-wish">
                <p>Способы связаться со мной</p>
            </div>
            <div className="connect">
                <div className="connect-div">
                    <img className="picture2" src={TG} alt="" />
                    <p>t.me/R1ch1111</p>
                </div>
                <div className="connect-div">
                    <img className="picture2" src={VK} alt="" />
                    <p>vk.com/r1ch111</p>
                </div>
                <div className="connect-div">
                    <img className="picture2" src={Git} alt="" />
                    <p>github.com/R1ch1131</p>
                </div>
            </div>
        </div>
    )
}