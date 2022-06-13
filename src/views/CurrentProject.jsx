import '../styles/CurrentProject.scss';
import LinearProgress from '@mui/material/LinearProgress';


const MyProjects = (props) => {
  return (
    <div className="current-project">
      <div className="current-project__menu">

      <div className="current-project__menu__logo"/>

      <div className="current-project__menu__separator"/>

      <div className="current-project__menu__link-wrappers">

        <div className="current-project__menu__link active">
            <div className="current-project__menu__link-icon"></div>
            <div className="current-project__menu__link-text">Мои проекты</div>
        </div>
        <div className="current-project__menu__link">
            <div className="current-project__menu__link-icon"></div>
            <div className="current-project__menu__link-text">Консультирование</div>
        </div>
        <div className="current-project__menu__link">
            <div className="current-project__menu__link-icon"></div>
            <div className="current-project__menu__link-text">База знаний</div>
        </div>
        <div className="current-project__menu__link">
            <div className="current-project__menu__link-icon"></div>
            <div className="current-project__menu__link-text">Настройки</div>
        </div>

        <div className="current-project__menu__link">
            <div className="current-project__menu__link-icon"></div>
            <div className="current-project__menu__link-text">Выйти</div>
        </div>

      </div>
      

      </div>
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
                        <div className="current-project__main__resume__data-block__icon"></div>
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
                                <div className="icon"/>
                                Готово
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <LinearProgress variant="determinate" value={12} />
                            </div>
                        </div>

                        <div className="current-project__main__road-map__table__main__block">
                            <div className="current-project__main__road-map__table__main__column">Сбор документов</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <div className="icon"/>
                                Готово
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <LinearProgress variant="determinate" value={12} />
                            </div>
                        </div>


                        <div className="current-project__main__road-map__table__main__block">
                            <div className="current-project__main__road-map__table__main__column">Сбор документов</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <div className="icon"/>
                                Готово
                            </div>
                            <div className="current-project__main__road-map__table__main__column">5 май 2022</div>
                            <div className="current-project__main__road-map__table__main__column">
                                <LinearProgress variant="determinate" value={12} />
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
                            {/* TODO: вместо svg использовать компонент */}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.86755 1.15674L6 5.02429L2.13245 1.15674C1.96149 0.985782 1.72962 0.889739 1.48785 0.889739C1.24609 0.889739 1.01422 0.985782 0.843262 1.15674C0.672306 1.32769 0.576263 1.55956 0.576263 1.80133C0.576263 2.0431 0.672306 2.27497 0.843262 2.44592L4.71082 6.31348L0.843262 10.181C0.672306 10.352 0.576263 10.5839 0.576263 10.8256C0.576263 11.0674 0.672306 11.2993 0.843262 11.4702C1.01422 11.6412 1.24609 11.7372 1.48785 11.7372C1.72962 11.7372 1.96149 11.6412 2.13245 11.4702L6 7.60266L9.86755 11.4702C10.0385 11.6412 10.2704 11.7372 10.5121 11.7372C10.7539 11.7372 10.9858 11.6412 11.1567 11.4702C11.3277 11.2993 11.4237 11.0674 11.4237 10.8256C11.4237 10.5839 11.3277 10.352 11.1567 10.181L7.28919 6.31348L11.1567 2.44592C11.3277 2.27497 11.4237 2.0431 11.4237 1.80133C11.4237 1.55956 11.3277 1.32769 11.1567 1.15674C10.9858 0.985782 10.7539 0.889739 10.5121 0.889739C10.2704 0.889739 10.0385 0.985781 9.86755 1.15674Z" fill="#A3AED0"/>
                            </svg>
                        </div>
                    </div>
                    <div className="current-project__main__documents__link">
                        <span className="text">Лицензия от Ростенхадзора.PDF</span>
                        <span className="size">(522.1 КБ)</span>
                        <div className="btn-close">
                            {/* TODO: вместо svg использовать компонент */}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.86755 1.15674L6 5.02429L2.13245 1.15674C1.96149 0.985782 1.72962 0.889739 1.48785 0.889739C1.24609 0.889739 1.01422 0.985782 0.843262 1.15674C0.672306 1.32769 0.576263 1.55956 0.576263 1.80133C0.576263 2.0431 0.672306 2.27497 0.843262 2.44592L4.71082 6.31348L0.843262 10.181C0.672306 10.352 0.576263 10.5839 0.576263 10.8256C0.576263 11.0674 0.672306 11.2993 0.843262 11.4702C1.01422 11.6412 1.24609 11.7372 1.48785 11.7372C1.72962 11.7372 1.96149 11.6412 2.13245 11.4702L6 7.60266L9.86755 11.4702C10.0385 11.6412 10.2704 11.7372 10.5121 11.7372C10.7539 11.7372 10.9858 11.6412 11.1567 11.4702C11.3277 11.2993 11.4237 11.0674 11.4237 10.8256C11.4237 10.5839 11.3277 10.352 11.1567 10.181L7.28919 6.31348L11.1567 2.44592C11.3277 2.27497 11.4237 2.0431 11.4237 1.80133C11.4237 1.55956 11.3277 1.32769 11.1567 1.15674C10.9858 0.985782 10.7539 0.889739 10.5121 0.889739C10.2704 0.889739 10.0385 0.985781 9.86755 1.15674Z" fill="#A3AED0"/>
                            </svg>
                        </div>
                    </div>
                    <div className="current-project__main__documents__link">
                        <span className="text">Лицензия от Ростенхадзора.PDF</span>
                        <span className="size">(522.1 КБ)</span>
                        <div className="btn-close">
                        {/* TODO: вместо svg использовать компонент */}
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.86755 1.15674L6 5.02429L2.13245 1.15674C1.96149 0.985782 1.72962 0.889739 1.48785 0.889739C1.24609 0.889739 1.01422 0.985782 0.843262 1.15674C0.672306 1.32769 0.576263 1.55956 0.576263 1.80133C0.576263 2.0431 0.672306 2.27497 0.843262 2.44592L4.71082 6.31348L0.843262 10.181C0.672306 10.352 0.576263 10.5839 0.576263 10.8256C0.576263 11.0674 0.672306 11.2993 0.843262 11.4702C1.01422 11.6412 1.24609 11.7372 1.48785 11.7372C1.72962 11.7372 1.96149 11.6412 2.13245 11.4702L6 7.60266L9.86755 11.4702C10.0385 11.6412 10.2704 11.7372 10.5121 11.7372C10.7539 11.7372 10.9858 11.6412 11.1567 11.4702C11.3277 11.2993 11.4237 11.0674 11.4237 10.8256C11.4237 10.5839 11.3277 10.352 11.1567 10.181L7.28919 6.31348L11.1567 2.44592C11.3277 2.27497 11.4237 2.0431 11.4237 1.80133C11.4237 1.55956 11.3277 1.32769 11.1567 1.15674C10.9858 0.985782 10.7539 0.889739 10.5121 0.889739C10.2704 0.889739 10.0385 0.985781 9.86755 1.15674Z" fill="#A3AED0"/>
                            </svg>
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
                                {/* TODO: вместо svg использовать компонент */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.86755 1.15674L6 5.02429L2.13245 1.15674C1.96149 0.985782 1.72962 0.889739 1.48785 0.889739C1.24609 0.889739 1.01422 0.985782 0.843262 1.15674C0.672306 1.32769 0.576263 1.55956 0.576263 1.80133C0.576263 2.0431 0.672306 2.27497 0.843262 2.44592L4.71082 6.31348L0.843262 10.181C0.672306 10.352 0.576263 10.5839 0.576263 10.8256C0.576263 11.0674 0.672306 11.2993 0.843262 11.4702C1.01422 11.6412 1.24609 11.7372 1.48785 11.7372C1.72962 11.7372 1.96149 11.6412 2.13245 11.4702L6 7.60266L9.86755 11.4702C10.0385 11.6412 10.2704 11.7372 10.5121 11.7372C10.7539 11.7372 10.9858 11.6412 11.1567 11.4702C11.3277 11.2993 11.4237 11.0674 11.4237 10.8256C11.4237 10.5839 11.3277 10.352 11.1567 10.181L7.28919 6.31348L11.1567 2.44592C11.3277 2.27497 11.4237 2.0431 11.4237 1.80133C11.4237 1.55956 11.3277 1.32769 11.1567 1.15674C10.9858 0.985782 10.7539 0.889739 10.5121 0.889739C10.2704 0.889739 10.0385 0.985781 9.86755 1.15674Z" fill="#A3AED0"/>
                                </svg>
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
                                {/* TODO: вместо svg использовать компонент */}
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.86755 1.15674L6 5.02429L2.13245 1.15674C1.96149 0.985782 1.72962 0.889739 1.48785 0.889739C1.24609 0.889739 1.01422 0.985782 0.843262 1.15674C0.672306 1.32769 0.576263 1.55956 0.576263 1.80133C0.576263 2.0431 0.672306 2.27497 0.843262 2.44592L4.71082 6.31348L0.843262 10.181C0.672306 10.352 0.576263 10.5839 0.576263 10.8256C0.576263 11.0674 0.672306 11.2993 0.843262 11.4702C1.01422 11.6412 1.24609 11.7372 1.48785 11.7372C1.72962 11.7372 1.96149 11.6412 2.13245 11.4702L6 7.60266L9.86755 11.4702C10.0385 11.6412 10.2704 11.7372 10.5121 11.7372C10.7539 11.7372 10.9858 11.6412 11.1567 11.4702C11.3277 11.2993 11.4237 11.0674 11.4237 10.8256C11.4237 10.5839 11.3277 10.352 11.1567 10.181L7.28919 6.31348L11.1567 2.44592C11.3277 2.27497 11.4237 2.0431 11.4237 1.80133C11.4237 1.55956 11.3277 1.32769 11.1567 1.15674C10.9858 0.985782 10.7539 0.889739 10.5121 0.889739C10.2704 0.889739 10.0385 0.985781 9.86755 1.15674Z" fill="#A3AED0"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       

        <div className="current-project__main__block">
            <div className="current-project__main__result">
                <div className="current-project__main__result__icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="30" cy="30" r="30" fill="white"/>
                        <path d="M41.5714 30.4999C41.2304 30.4999 40.9034 30.6353 40.6623 30.8764C40.4211 31.1176 40.2857 31.4446 40.2857 31.7856V36.9284C40.2857 37.2694 40.1502 37.5965 39.9091 37.8376C39.668 38.0787 39.341 38.2141 39 38.2141H21C20.659 38.2141 20.3319 38.0787 20.0908 37.8376C19.8497 37.5965 19.7143 37.2694 19.7143 36.9284V31.7856C19.7143 31.4446 19.5788 31.1176 19.3377 30.8764C19.0966 30.6353 18.7695 30.4999 18.4285 30.4999C18.0875 30.4999 17.7605 30.6353 17.5194 30.8764C17.2783 31.1176 17.1428 31.4446 17.1428 31.7856V36.9284C17.1428 37.9514 17.5492 38.9325 18.2726 39.6558C18.9959 40.3792 19.977 40.7856 21 40.7856H39C40.0229 40.7856 41.004 40.3792 41.7274 39.6558C42.4507 38.9325 42.8571 37.9514 42.8571 36.9284V31.7856C42.8571 31.4446 42.7217 31.1176 42.4805 30.8764C42.2394 30.6353 41.9124 30.4999 41.5714 30.4999ZM29.0871 32.6984C29.2094 32.8155 29.3536 32.9072 29.5114 32.9684C29.6653 33.0365 29.8317 33.0716 30 33.0716C30.1682 33.0716 30.3346 33.0365 30.4885 32.9684C30.6464 32.9072 30.7905 32.8155 30.9128 32.6984L36.0557 27.5556C36.2978 27.3135 36.4338 26.9851 36.4338 26.6427C36.4338 26.3003 36.2978 25.972 36.0557 25.7299C35.8136 25.4878 35.4852 25.3517 35.1428 25.3517C34.8004 25.3517 34.4721 25.4878 34.23 25.7299L31.2857 28.687V16.357C31.2857 16.016 31.1502 15.689 30.9091 15.4479C30.668 15.2067 30.341 15.0713 30 15.0713C29.659 15.0713 29.3319 15.2067 29.0908 15.4479C28.8497 15.689 28.7143 16.016 28.7143 16.357V28.687L25.77 25.7299C25.6501 25.61 25.5078 25.5149 25.3511 25.45C25.1945 25.3851 25.0266 25.3517 24.8571 25.3517C24.6876 25.3517 24.5197 25.3851 24.3631 25.45C24.2064 25.5149 24.0641 25.61 23.9443 25.7299C23.8244 25.8497 23.7293 25.9921 23.6644 26.1487C23.5995 26.3053 23.5661 26.4732 23.5661 26.6427C23.5661 26.8123 23.5995 26.9801 23.6644 27.1368C23.7293 27.2934 23.8244 27.4357 23.9443 27.5556L29.0871 32.6984Z" fill="white"/>
                    </svg>

                </div>
                <div className="current-project__main__result__text">
                    <div className="title">Результат работы (заключение/проект)</div>
                    <div className="description">Итоговые заключения (4 шт).zip <span>(120.5 КБ)</span></div>
                </div>

            </div>


            <div className="current-project__main__questions">

            </div>
        </div>
        

        <div className="current-project__main__footer">
            <div className="current-project__main__footer__year">
                © 1991-2022 Группа Компаний Триада. Все права защищены.
            </div>
            <div className="current-project__main__footer__about">
                <div className="current-project__main__footer__about-text">О компании</div>
                <div className="current-project__main__footer__about-text">Услуги</div>
                <div className="current-project__main__footer__about-text">Контакты</div>
            </div>
        </div>
    </div>

 </div>
  );
}

export default MyProjects;
