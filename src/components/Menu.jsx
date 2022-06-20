import '../styles/Menu.scss';
import React from "react";
import { Link } from 'react-router-dom';

const Menu=(props)=>{
    return(
        <div className="menu">

        <div className="menu__logo"/>

        <div className="menu__separator"/>

        <div className="menu__link-wrappers">

            <div className="menu__link active">
                <div className="menu__link-icon"/>
                <Link to={`/MyProjects`} className="menu__link-text">Мои проекты</Link>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <Link to={`/MyProjects`} className="menu__link-text">Консультирование</Link>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <Link to={`/BaseKnowledge`} className="menu__link-text">База знаний</Link>
            </div>
            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <Link to={`/SettingsPage`} className="menu__link-text">Настройки</Link>
            </div>

            <div className="menu__link">
                <div className="menu__link-icon"></div>
                <Link to={`/`} className="menu__link-text">Выйти</Link>
            </div>

        </div>
  

     </div>
    )
}

export default Menu;