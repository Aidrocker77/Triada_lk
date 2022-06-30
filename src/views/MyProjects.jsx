import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import Menu from '../components/Menu';
import FooterComponent from '../components/Footer';

import CurrentIcon from '../components/icons/CurrentIcon';
import FinishedProjectIcon from '../components/icons/FinishedProjectIcon';
import BonusProkectIcon from '../components/icons/BonusProjectIcon';
import getDealListService from '../services/get-deal.list.service';

import '../styles/MyProjects.scss';


function MyProjects() {
    const [dealList ,setDealList]=useState([]);

     //Filters
     const currentDeals =dealList? dealList.filter(deal => {
        if(deal.STAGE_ID == 'C61:FINAL_INVOICE' || deal.STAGE_ID == "C75:PREPAYMENT_INVOIC"){
            return deal
        }        
    }):null;
    const completedDeals = dealList?dealList.filter(deal => {
        if(deal.STAGE_ID == 'C61:WON' || deal.STAGE_ID == 'C75:WON'){
            return deal
        }        
    }):null;

    const getDealList= () => {
        getDealListService()
        .then((res) => {
            setDealList(res);
        })
        .catch((e) => {
            console.log(e);
        })
    };

    useEffect(()=>{
        getDealList();
    },[]);

    // Тестовая функция ,для разработки
    // useEffect(()=>{
    //     const map =texts.currentProjects.map(el => {
    //         return el
    //     })
    //     console.log(map);        
    // },[dealList]);

    const texts = {
        title: ' Мои проекты',
        name: ' Мои проекты',
        currentProjects: currentDeals,
        finishedProjects: completedDeals,
        bonusProjects: dealList
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
                                <div className="my-projects__main__project-link" key={el.ID}>
                                    <Link to={`/MyProjects/${el.ID}`} className="menu__link-text">{el.TITLE}</Link>
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
                        <div className="my-projects__main__project-header__title">Завершенные</div>
                            <div className="my-projects__main__project-header__description">Работаем не покладая рук</div>
                        </div>
                    </div>

                    <div className="my-projects__main__project__separator"/>

                    <div className="my-projects__main__project-list">
                        {texts.finishedProjects.map(el => {
                            return (
                                <div className="my-projects__main__project-link" key={el.ID}>
                                    <Link to={`/MyProjects/${el.ID}`} className="menu__link-text">{el.TITLE}</Link>
                                </div>            
                            )
                        })}
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
                                    <div className="my-projects__main__project-link" key={el.ID}>
                                        <Link to={`/MyProjects/${el.ID}`} className="menu__link-text">{el.TITLE}</Link>
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
