import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '../components/Menu';
import FooterComponent from '../components/Footer';

import CloseIcon from '../components/icons/CloseIcon';
import StatusFinishedIcon from '../components/icons/StatusFinishedIcon';
import StatusInProcessIcon from '../components/icons/StatusInProcessIcon';
import StatusNotYeatIcon from '../components/icons/StatusNotYeatIcon';
import DownLoadIcon from '../components/icons/DownLoadIcon';

import '../styles/CurrentBaseKnowledge.scss';

const MyProjects = (props) => {
  return (
    <div className="current-project">
        <Menu/>
        <div className="current-project__main">
        <div className="current-project__main__title">
            Мои проекты / Текущие проекты 
        </div>
        <div className="current-project__main__header">
            <div className="current-project__main__header--title">
                Регистрация ОПО №1938-МФ
            </div>
        </div>

        <div className="current-project__main__block">
            <div className="current-project__main__resume">
                <div className="current-project__main__resume__title">
                    Резюме
                </div>
                <div className="current-project__main__resume__text">
                    Регистрация опасного производственного объекта — это  процесс идентификации производственного объекта по признакам опасности; присвоения ему
                    I, II, III или IV класса опасности.
                </div>
                <div className="current-project__main__resume__data">
                    <div className="current-project__main__resume__data-block">
                        <div className="current-project__main__resume__data-block__icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 2.25H14.25V1.5C14.25 1.0875 13.9125 0.75 13.5 0.75C13.0875 0.75 12.75 1.0875 12.75 1.5V2.25H5.25V1.5C5.25 1.0875 4.9125 0.75 4.5 0.75C4.0875 0.75 3.75 1.0875 3.75 1.5V2.25H3C2.175 2.25 1.5 2.925 1.5 3.75V15.75C1.5 16.575 2.175 17.25 3 17.25H15C15.825 17.25 16.5 16.575 16.5 15.75V3.75C16.5 2.925 15.825 2.25 15 2.25ZM14.25 15.75H3.75C3.3375 15.75 3 15.4125 3 15V6H15V15C15 15.4125 14.6625 15.75 14.25 15.75Z" fill="#A3AED0"/>
                            </svg>
                        </div>
                            Дата завершения
                    </div>

                    8 июля 2022 г.
                </div>
            </div>

            <div className="current-project__main__road-map">
                <div className="current-project__main__road-map__title">
                    Дорожная карта
                </div>
                <div className="current-project__main__road-map__table">
                    <div className="current-project__main__road-map__table__header">
                        <div className="current-project__main__road-map__table__header__column">Название</div>
                        <div className="current-project__main__road-map__table__header__column">Статус</div>
                        <div className="current-project__main__road-map__table__header__column">Завершение</div>
                        <div className="current-project__main__road-map__table__header__column">Прогресс</div>
                    </div>
                    <div className="current-project__main__road-map__separator"/>
                    <div className="current-project__main__road-map__table__main">
                        <div className="current-project__main__road-map__table__main__block">
                            <div className="current-project__main__road-map__table__main__column">Сбор документов</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <div className="icon">
                                    <StatusFinishedIcon/>
                                </div>
                                Готово
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column progress">
                                <LinearProgress variant="determinate" value={100} />
                            </div>
                        </div>

                        <div className="current-project__main__road-map__table__main__block">
                            <div className="current-project__main__road-map__table__main__column">Сбор документов</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <div className="icon">
                                    <StatusInProcessIcon/>
                                </div>
                                В процессе
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column progress">
                                <LinearProgress variant="determinate" value={50} />
                            </div>
                        </div>


                        <div className="current-project__main__road-map__table__main__block">
                            <div className="current-project__main__road-map__table__main__column">Сбор документов</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <div className="icon">
                                    <StatusNotYeatIcon/>
                                </div>
                                Не начато
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column progress">
                                <LinearProgress variant="determinate" value={0} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="current-project__main__block">
            <div className="current-project__main__documents">
                <div className="current-project__main__documents__header">
                    <div className="current-project__main__documents__header__text">
                        <div className="title">
                            Ваши документы
                        </div>
                        <div className="description">
                            Обеспечим конфиденциальность
                        </div>
                    </div>

                    <div className="current-project__main__documents__button-add">
                        Добавить файл
                    </div>
                </div>
                <div className="current-project__main__documents__separator"/>
                <div className="current-project__main__documents__links">
                    <div className="current-project__main__documents__link">
                        <span className="text">Лицензия от Ростенхадзора.PDF</span>
                        <span className="size">(522.1 КБ)</span>
                        <div className="btn-close">
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="current-project__main__documents__link">
                        <span className="text">Лицензия от Ростенхадзора.PDF</span>
                        <span className="size">(522.1 КБ)</span>
                        <div className="btn-close">
                            <CloseIcon/>
                        </div>
                    </div>
                    <div className="current-project__main__documents__link">
                        <span className="text">Лицензия от Ростенхадзора.PDF</span>
                        <span className="size">(522.1 КБ)</span>
                        <div className="btn-close">
                            <CloseIcon/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="current-project__main__comments">
                <div className="current-project__main__comments__action-block">
                    <div className="title">
                        Комментарии и пожелания
                    </div>
                    <div className="text-input">
                        <textarea
                            placeholder='Оставьте любые комметариии и пожелания по проекту'
                        />
                    </div>
                    <div className="button-send-comment">
                        Отправить
                    </div>
                </div>
                <div className="current-project__main__comments__separator"/>
                <div className="current-project__main__comments__comments-block">
                    <div className="comment-block">
                        <div className="text">
                            Если можно, хотелось бы получить копии
                            заключительных документов. Спасибо!
                        </div>
                        <div className="footer">
                            <div className="data">
                                07.06.2022 — 11:04
                            </div>
                            <div className="btn-close">
                                <CloseIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="comment-block">
                        <div className="text">
                            Если можно, хотелось бы получить копии
                            заключительных документов. Спасибо!
                        </div>
                        <div className="footer">
                            <div className="data">
                                07.06.2022 — 11:04
                            </div>
                            <div className="btn-close">
                                <CloseIcon/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
       

            <div className="current-project__main__block">
                <div className="current-project__main__result">
                    <div className="current-project__main__result__icon">
                        <DownLoadIcon/>
                    </div>
                    <div className="current-project__main__result__text">
                        <div className="title">Результат работы (заключение/проект)</div>
                        <div className="description">Итоговые заключения (4 шт).zip <span>(120.5 КБ)</span></div>
                    </div>

                </div>


                <div className="current-project__main__questions">
                    <div className="current-project__main__questions__photos">
                        <div className="item-photo first"/>
                        <div className="item-photo second"/>
                        <div className="item-photo number">
                            20+
                        </div>
                    </div>
                    <div className="current-project__main__questions__text">
                        <div className="title">Возник вопрос?</div>
                        <div className="description">
                            Получите быстрый ответ от наших экспертов
                        </div>
                    </div>
                    <div className="current-project__main__questions__action">
                        <div className="button-send-question">
                            Задать вопрос
                        </div>
                    </div>


                </div>
            </div>
        

            <FooterComponent/>
        </div>

    </div>
  );
}

export default MyProjects;
