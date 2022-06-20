import React from "react";
import Menu from '../components/Menu';
import FooterComponent from '../components/Footer';

import CurrentIcon from '../components/icons/CurrentIcon';
import FinishedProjectIcon from '../components/icons/FinishedProjectIcon';
import BonusProkectIcon from '../components/icons/BonusProjectIcon';

import '../styles/MyProjects.scss';

function MyProjects() {
    const texts = {
        title: ' Мои проекты',
        name: ' Мои проекты',
        currentProjects: [
            {id: 1, text: 'Разработка санитарно-защитной зоны'},
            {id: 2, text: 'Регистрация ОПО'},
            {id: 3, text: 'Разработка проекта ПДВ'},
        ],
        finishedProjects: [
            {id: 1, text: 'Разработка проекта НДС'},
        ],
        bonusProjects: [
            {id: 1, text: 'Экологическое сопровождение '},
            {id: 2, text: 'Бесплатные консультации'},
        ]
    };

    return (
        <div className="my-projects">
        <Menu/>
        <div className="my-projects__main">
            <div className="my-projects__main__title">
                {texts.title} 
            </div>
            <div className="my-projects__main__header">
                <div className="my-projects__main__header--title">
                    {texts.name} 
                </div>
            </div>
            <div className="my-projects__main__projects">
                <div className="my-projects__main__project">
                    <div className="my-projects__main__project-header">
                        <div className="my-projects__main__project-header__icon">
                        <CurrentIcon/>
                        </div>

                        <div className="my-projects__main__project-header__text">
                            <div className="my-projects__main__project-header__title">Текущие</div>
                            <div className="my-projects__main__project-header__description">Работаем не покладая рук</div>
                        </div>
                    </div>

                    <div className="my-projects__main__project__separator"/>

                    <div className="my-projects__main__project-list">
                        {texts.currentProjects.map(el => {
                            return (
                                <div className="my-projects__main__project-link" key={el.id}>
                                    {el.text}
                                </div>            
                            )
                        })}
                    </div>
                </div>

                <div className="my-projects__main__project">
                    <div className="my-projects__main__project-header">
                        <div className="my-projects__main__project-header__icon">
                        <FinishedProjectIcon/>
                        </div>
                        
                        <div className="my-projects__main__project-header__text">
                            {texts.finishedProjects.map(el => {
                                return (
                                    <div className="my-projects__main__project-link" key={el.id}>
                                        {el.text}
                                    </div>            
                                )
                            })}
                        </div>
                    </div>

                    <div className="my-projects__main__project__separator"/>

                    <div className="my-projects__main__project-list">
                        <div className="my-projects__main__project-link">Разработка проекта НДС</div>
                    </div>
                </div>

                <div className="my-projects__main__project">
                    <div className="my-projects__main__project-header">
                        <div className="my-projects__main__project-header__icon">
                        <BonusProkectIcon/>
                        </div>
                        <div className="my-projects__main__project-header__text">
                            <div className="my-projects__main__project-header__title">Бонусы</div>
                            <div className="my-projects__main__project-header__description">Клиенты — наше всё</div>
                        </div>
                    </div>

                    <div className="my-projects__main__project__separator"/>

                    <div className="my-projects__main__project-list">
                        {texts.bonusProjects.map(el => {
                                return (
                                    <div className="my-projects__main__project-link" key={el.id}>
                                        {el.text}
                                    </div>            
                                )
                            })}
                    </div>
                </div>

            </div>

            <FooterComponent/>
        </div>
        </div>
    );
}

export default MyProjects;
