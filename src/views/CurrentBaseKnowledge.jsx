import '../styles/CurrentProject.scss';
import LinearProgress from '@mui/material/LinearProgress';


const MyProjects = (props) => {
  return (
    <div className="current-base-knowledge">
      <div className="current-base-knowledge__menu">

      <div className="current-base-knowledge__menu__logo"/>

      <div className="current-base-knowledge__menu__separator"/>

      <div className="current-base-knowledge__menu__link-wrappers">

        <div className="current-base-knowledge__menu__link active">
            <div className="current-base-knowledge__menu__link-icon"></div>
            <div className="current-base-knowledge__menu__link-text">Мои проекты</div>
        </div>
        <div className="current-base-knowledge__menu__link">
            <div className="current-base-knowledge__menu__link-icon"></div>
            <div className="current-base-knowledge__menu__link-text">Консультирование</div>
        </div>
        <div className="current-base-knowledge__menu__link">
            <div className="current-base-knowledge__menu__link-icon"></div>
            <div className="current-base-knowledge__menu__link-text">База знаний</div>
        </div>
        <div className="current-base-knowledge__menu__link">
            <div className="current-base-knowledge__menu__link-icon"></div>
            <div className="current-base-knowledge__menu__link-text">Настройки</div>
        </div>

        <div className="current-base-knowledge__menu__link">
            <div className="current-base-knowledge__menu__link-icon"></div>
            <div className="current-base-knowledge__menu__link-text">Выйти</div>
        </div>

      </div>
      

      </div>
      <div className="current-base-knowledge__main">
        <div className="current-base-knowledge__main__title">
            База знаний
        </div>
        <div className="current-base-knowledge__main__header">
            <div className="current-base-knowledge__main__header--title">
                Промышленная безопасность
            </div>
        </div>

        <div className="current-base-knowledge__main__wrapper">
            <div className="block-content__wrapper">
                <div className="block-content">
                    <div className="block-content__title">
                        Регистрация опасного производственного объекта
                    </div>
                    <div className="block-content__description">
                        <span>
                            Что такое регистрация опасного производственного объекта?
                        </span>
                        
                        Это  процесс идентификации производственного объекта по признакам опасности;
                        присвоения ему I, II, III или IV класса опасности и дальнейшей подачи документов для внесения опасного объекта в Реестр Ростехнадзора.
                    </div>
                    <div className="block-content__video">
                        <div className="block-content__video__title">
                            Классы опасности и их категории
                        </div>
                        <div className="block-content__video__block">
                            <div className="icon">
                                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_1_607)">
                                        <circle cx="41" cy="41" r="41" fill="white" fill-opacity="0.35"/>
                                    </g>
                                    <path d="M55.698 41L33.6508 53.7289L33.6508 28.2711L55.698 41Z" fill="white"/>
                                    <defs>
                                        <filter id="filter0_b_1_607" x="-19" y="-19" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImage" stdDeviation="9.5"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_607"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_607" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="block-content__video__description">
                            Каков порядок регистрации опасного производственного объекта?
                        </div>
                    </div>
                </div>
                <div className="action">
                    <div className="button-all-states">
                        Все статьи
                    </div>
                </div>

                .
            </div>
            
            <div className="block-question">
                <div className="block-question__title">
                    Возник вопрос?
                </div>

                <div className="block-question__description">
                    Получите быстрый ответ от наших экспертов
                </div>

                <div className="block-question__action">
                    Задать вопрос
                </div>
            </div>
        </div>
        

        <div className="current-base-knowledge__main__footer">
            <div className="current-base-knowledge__main__footer__year">
                © 1991-2022 Группа Компаний Триада. Все права защищены.
            </div>
            <div className="current-base-knowledge__main__footer__about">
                <div className="current-base-knowledge__main__footer__about-text">О компании</div>
                <div className="current-base-knowledge__main__footer__about-text">Услуги</div>
                <div className="current-base-knowledge__main__footer__about-text">Контакты</div>
            </div>
        </div>
    </div>

 </div>
  );
}

export default MyProjects;
