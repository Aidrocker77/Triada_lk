import '../styles/BaseKnowledge.scss';

function MyProjects() {
  return (
    <div className="base-knowledge">
      <div className="base-knowledge__menu">

      <div className="base-knowledge__menu__logo"/>

      <div className="base-knowledge__menu__separator"/>

      <div className="base-knowledge__menu__link-wrappers">

        <div className="base-knowledge__menu__link active">
            <div className="base-knowledge__menu__link-icon"></div>
            <div className="base-knowledge__menu__link-text">Мои проекты</div>
        </div>
        <div className="base-knowledge__menu__link">
            <div className="base-knowledge__menu__link-icon"></div>
            <div className="base-knowledge__menu__link-text">Консультирование</div>
        </div>
        <div className="base-knowledge__menu__link">
            <div className="base-knowledge__menu__link-icon"></div>
            <div className="base-knowledge__menu__link-text">База знаний</div>
        </div>
        <div className="base-knowledge__menu__link">
            <div className="base-knowledge__menu__link-icon"></div>
            <div className="base-knowledge__menu__link-text">Настройки</div>
        </div>

        <div className="base-knowledge__menu__link">
            <div className="base-knowledge__menu__link-icon"></div>
            <div className="base-knowledge__menu__link-text">Выйти</div>
        </div>

      </div>
      

      </div>
      <div className="base-knowledge__main">
        <div className="base-knowledge__main__title">
            База знаний
        </div>
        <div className="base-knowledge__main__header">
            <div className="base-knowledge__main__header--title">
                База знаний
            </div>
        </div>

        <div className="base-knowledge__main__wrapper">
            <div className="base-knowledge__main__block">
                <div className="base-knowledge__main__block__header">
                    <div className="base-knowledge__main__block__icon">
                        {/* TODO: сделать компонентом */}
                       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9999 17.3333C15.594 17.3286 15.1963 17.4483 14.8605 17.6764C14.5247 17.9045 14.2668 18.23 14.1215 18.6091C13.9763 18.9882 13.9507 19.4027 14.0481 19.7968C14.1456 20.1908 14.3614 20.5456 14.6666 20.8133V22.6667C14.6666 23.0203 14.8071 23.3594 15.0571 23.6095C15.3072 23.8595 15.6463 24 15.9999 24C16.3535 24 16.6927 23.8595 16.9427 23.6095C17.1928 23.3594 17.3333 23.0203 17.3333 22.6667V20.8133C17.6384 20.5456 17.8543 20.1908 17.9517 19.7968C18.0492 19.4027 18.0235 18.9882 17.8783 18.6091C17.7331 18.23 17.4752 17.9045 17.1393 17.6764C16.8035 17.4483 16.4059 17.3286 15.9999 17.3333ZM22.6666 12V9.33334C22.6666 7.56523 21.9642 5.86954 20.714 4.61929C19.4637 3.36905 17.768 2.66667 15.9999 2.66667C14.2318 2.66667 12.5361 3.36905 11.2859 4.61929C10.0356 5.86954 9.33325 7.56523 9.33325 9.33334V12C8.27239 12 7.25497 12.4214 6.50482 13.1716C5.75468 13.9217 5.33325 14.9391 5.33325 16V25.3333C5.33325 26.3942 5.75468 27.4116 6.50482 28.1618C7.25497 28.9119 8.27239 29.3333 9.33325 29.3333H22.6666C23.7274 29.3333 24.7449 28.9119 25.495 28.1618C26.2452 27.4116 26.6666 26.3942 26.6666 25.3333V16C26.6666 14.9391 26.2452 13.9217 25.495 13.1716C24.7449 12.4214 23.7274 12 22.6666 12ZM11.9999 9.33334C11.9999 8.27247 12.4213 7.25506 13.1715 6.50491C13.9216 5.75477 14.9391 5.33334 15.9999 5.33334C17.0608 5.33334 18.0782 5.75477 18.8283 6.50491C19.5785 7.25506 19.9999 8.27247 19.9999 9.33334V12H11.9999V9.33334ZM23.9999 25.3333C23.9999 25.687 23.8594 26.0261 23.6094 26.2761C23.3593 26.5262 23.0202 26.6667 22.6666 26.6667H9.33325C8.97963 26.6667 8.64049 26.5262 8.39044 26.2761C8.14039 26.0261 7.99992 25.687 7.99992 25.3333V16C7.99992 15.6464 8.14039 15.3072 8.39044 15.0572C8.64049 14.8071 8.97963 14.6667 9.33325 14.6667H22.6666C23.0202 14.6667 23.3593 14.8071 23.6094 15.0572C23.8594 15.3072 23.9999 15.6464 23.9999 16V25.3333Z" fill="#254289"/>
                        </svg>

                    </div>

                    <div className="base-knowledge__main__block__header__text-wrapper">
                        <div className="base-knowledge__main__block__header__title">
                            Промышленная безопасность
                        </div>
                        <div className="base-knowledge__main__block__header__description">
                            Более 128 экспертных статей
                        </div>
                    </div>
                </div>
                <div className="base-knowledge__main__block__separator"/>
                <div className="base-knowledge__main__block__rules-list">
                    <div className="item">
                        Положение о расследовании инцидентов
                    </div>

                    <div className="item-accordion active">
                        <div className="item-accordion__header">
                            <div className="item-accordion__text">
                                Производственный контроль
                            </div>
                            <div className="item-accordion__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00005 10.59L11.2901 14.83C11.383 14.9237 11.4936 14.9981 11.6155 15.0489C11.7373 15.0997 11.868 15.1258 12.0001 15.1258C12.1321 15.1258 12.2628 15.0997 12.3846 15.0489C12.5065 14.9981 12.6171 14.9237 12.7101 14.83L16.9501 10.59C17.0438 10.497 17.1182 10.3864 17.1689 10.2646C17.2197 10.1427 17.2459 10.012 17.2459 9.88C17.2459 9.74798 17.2197 9.61728 17.1689 9.49542C17.1182 9.37356 17.0438 9.26296 16.9501 9.17C16.7627 8.98374 16.5092 8.8792 16.2451 8.8792C15.9809 8.8792 15.7274 8.98374 15.5401 9.17L12.0001 12.71L8.46005 9.16999C8.27379 8.98525 8.02239 8.8811 7.76005 8.87999C7.62845 8.87923 7.49798 8.90446 7.37614 8.95422C7.25431 9.00399 7.14349 9.07731 7.05005 9.16999C6.95298 9.25961 6.87462 9.36758 6.81952 9.48765C6.76441 9.60773 6.73364 9.73753 6.72899 9.86957C6.72434 10.0016 6.7459 10.1333 6.79243 10.2569C6.83895 10.3806 6.90952 10.4938 7.00005 10.59Z" fill="#F0C988"/>
                                </svg>
                            </div>
                        </div>
                        <div className="item-accordion__list">
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        Положение о расследовании инцидентов
                    </div>

                    <div className="item-accordion">
                        <div className="item-accordion__header">
                            <div className="item-accordion__text">
                                Производственный контроль
                            </div>
                            <div className="item-accordion__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00005 10.59L11.2901 14.83C11.383 14.9237 11.4936 14.9981 11.6155 15.0489C11.7373 15.0997 11.868 15.1258 12.0001 15.1258C12.1321 15.1258 12.2628 15.0997 12.3846 15.0489C12.5065 14.9981 12.6171 14.9237 12.7101 14.83L16.9501 10.59C17.0438 10.497 17.1182 10.3864 17.1689 10.2646C17.2197 10.1427 17.2459 10.012 17.2459 9.88C17.2459 9.74798 17.2197 9.61728 17.1689 9.49542C17.1182 9.37356 17.0438 9.26296 16.9501 9.17C16.7627 8.98374 16.5092 8.8792 16.2451 8.8792C15.9809 8.8792 15.7274 8.98374 15.5401 9.17L12.0001 12.71L8.46005 9.16999C8.27379 8.98525 8.02239 8.8811 7.76005 8.87999C7.62845 8.87923 7.49798 8.90446 7.37614 8.95422C7.25431 9.00399 7.14349 9.07731 7.05005 9.16999C6.95298 9.25961 6.87462 9.36758 6.81952 9.48765C6.76441 9.60773 6.73364 9.73753 6.72899 9.86957C6.72434 10.0016 6.7459 10.1333 6.79243 10.2569C6.83895 10.3806 6.90952 10.4938 7.00005 10.59Z" fill="#F0C988"/>
                                </svg>
                            </div>
                        </div>
                        <div className="item-accordion__list">
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        Положение о расследовании инцидентов
                    </div>
                </div>
            </div>
            <div className="base-knowledge__main__block">
                <div className="base-knowledge__main__block__header">
                    <div className="base-knowledge__main__block__icon">
                        {/* TODO: сделать компонентом */}
                       <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9999 17.3333C15.594 17.3286 15.1963 17.4483 14.8605 17.6764C14.5247 17.9045 14.2668 18.23 14.1215 18.6091C13.9763 18.9882 13.9507 19.4027 14.0481 19.7968C14.1456 20.1908 14.3614 20.5456 14.6666 20.8133V22.6667C14.6666 23.0203 14.8071 23.3594 15.0571 23.6095C15.3072 23.8595 15.6463 24 15.9999 24C16.3535 24 16.6927 23.8595 16.9427 23.6095C17.1928 23.3594 17.3333 23.0203 17.3333 22.6667V20.8133C17.6384 20.5456 17.8543 20.1908 17.9517 19.7968C18.0492 19.4027 18.0235 18.9882 17.8783 18.6091C17.7331 18.23 17.4752 17.9045 17.1393 17.6764C16.8035 17.4483 16.4059 17.3286 15.9999 17.3333ZM22.6666 12V9.33334C22.6666 7.56523 21.9642 5.86954 20.714 4.61929C19.4637 3.36905 17.768 2.66667 15.9999 2.66667C14.2318 2.66667 12.5361 3.36905 11.2859 4.61929C10.0356 5.86954 9.33325 7.56523 9.33325 9.33334V12C8.27239 12 7.25497 12.4214 6.50482 13.1716C5.75468 13.9217 5.33325 14.9391 5.33325 16V25.3333C5.33325 26.3942 5.75468 27.4116 6.50482 28.1618C7.25497 28.9119 8.27239 29.3333 9.33325 29.3333H22.6666C23.7274 29.3333 24.7449 28.9119 25.495 28.1618C26.2452 27.4116 26.6666 26.3942 26.6666 25.3333V16C26.6666 14.9391 26.2452 13.9217 25.495 13.1716C24.7449 12.4214 23.7274 12 22.6666 12ZM11.9999 9.33334C11.9999 8.27247 12.4213 7.25506 13.1715 6.50491C13.9216 5.75477 14.9391 5.33334 15.9999 5.33334C17.0608 5.33334 18.0782 5.75477 18.8283 6.50491C19.5785 7.25506 19.9999 8.27247 19.9999 9.33334V12H11.9999V9.33334ZM23.9999 25.3333C23.9999 25.687 23.8594 26.0261 23.6094 26.2761C23.3593 26.5262 23.0202 26.6667 22.6666 26.6667H9.33325C8.97963 26.6667 8.64049 26.5262 8.39044 26.2761C8.14039 26.0261 7.99992 25.687 7.99992 25.3333V16C7.99992 15.6464 8.14039 15.3072 8.39044 15.0572C8.64049 14.8071 8.97963 14.6667 9.33325 14.6667H22.6666C23.0202 14.6667 23.3593 14.8071 23.6094 15.0572C23.8594 15.3072 23.9999 15.6464 23.9999 16V25.3333Z" fill="#254289"/>
                        </svg>

                    </div>
                    <div className="base-knowledge__main__block__header__text-wrapper">
                        <div className="base-knowledge__main__block__header__title">
                            Промышленная безопасность
                        </div>
                        <div className="base-knowledge__main__block__header__description">
                            Более 128 экспертных статей
                        </div>
                    </div>
                </div>
                <div className="base-knowledge__main__block__separator"/>
                <div className="base-knowledge__main__block__rules-list">
                    <div className="item">
                        Положение о расследовании инцидентов
                    </div>

                    <div className="item-accordion">
                        <div className="item-accordion__header">
                            <div className="item-accordion__text">
                                Производственный контроль
                            </div>
                            <div className="item-accordion__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00005 10.59L11.2901 14.83C11.383 14.9237 11.4936 14.9981 11.6155 15.0489C11.7373 15.0997 11.868 15.1258 12.0001 15.1258C12.1321 15.1258 12.2628 15.0997 12.3846 15.0489C12.5065 14.9981 12.6171 14.9237 12.7101 14.83L16.9501 10.59C17.0438 10.497 17.1182 10.3864 17.1689 10.2646C17.2197 10.1427 17.2459 10.012 17.2459 9.88C17.2459 9.74798 17.2197 9.61728 17.1689 9.49542C17.1182 9.37356 17.0438 9.26296 16.9501 9.17C16.7627 8.98374 16.5092 8.8792 16.2451 8.8792C15.9809 8.8792 15.7274 8.98374 15.5401 9.17L12.0001 12.71L8.46005 9.16999C8.27379 8.98525 8.02239 8.8811 7.76005 8.87999C7.62845 8.87923 7.49798 8.90446 7.37614 8.95422C7.25431 9.00399 7.14349 9.07731 7.05005 9.16999C6.95298 9.25961 6.87462 9.36758 6.81952 9.48765C6.76441 9.60773 6.73364 9.73753 6.72899 9.86957C6.72434 10.0016 6.7459 10.1333 6.79243 10.2569C6.83895 10.3806 6.90952 10.4938 7.00005 10.59Z" fill="#F0C988"/>
                                </svg>
                            </div>
                        </div>
                        <div className="item-accordion__list">
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                            <div className="item-accordion__list__item">
                                Идентификация опасного производственного объекта
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="base-knowledge__main__footer">
            <div className="base-knowledge__main__footer__year">
                © 1991-2022 Группа Компаний Триада. Все права защищены.
            </div>
            <div className="base-knowledge__main__footer__about">
                <div className="base-knowledge__main__footer__about-text">О компании</div>
                <div className="base-knowledge__main__footer__about-text">Услуги</div>
                <div className="base-knowledge__main__footer__about-text">Контакты</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
