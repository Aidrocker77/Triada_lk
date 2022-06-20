import '../styles/Menu.scss';
import React from "react";

const Menu=(props)=>{
    return(
        <div className="menu">

        <div className="menu__logo"/>

        <div className="menu__separator"/>

        <div className="menu__link-wrappers">

            <div className="menu__link active">
                <div className="menu__link-icon"/>
                <div className="menu__link-text">Мои проекты</div>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <div className="menu__link-text">Консультирование</div>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <div className="menu__link-text">База знаний</div>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <div className="menu__link-text">Настройки</div>
            </div>

            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <div className="menu__link-text">Выйти</div>
            </div>

        </div>
  

     </div>
    )
}

export default Menu;