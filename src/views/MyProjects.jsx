import '../styles/MyProjects.scss';

function MyProjects() {
  return (
    <div className="my-projects">
      <div className="my-projects__menu">

      <div className="my-projects__menu__logo"/>

      <div className="my-projects__menu__separator"/>

      <div className="my-projects__menu__link-wrappers">

        <div className="my-projects__menu__link active">
            <div className="my-projects__menu__link-icon"></div>
            <div className="my-projects__menu__link-text">Мои проекты</div>
        </div>
        <div className="my-projects__menu__link">
            <div className="my-projects__menu__link-icon"></div>
            <div className="my-projects__menu__link-text">Консультирование</div>
        </div>
        <div className="my-projects__menu__link">
            <div className="my-projects__menu__link-icon"></div>
            <div className="my-projects__menu__link-text">База знаний</div>
        </div>
        <div className="my-projects__menu__link">
            <div className="my-projects__menu__link-icon"></div>
            <div className="my-projects__menu__link-text">Настройки</div>
        </div>

        <div className="my-projects__menu__link">
            <div className="my-projects__menu__link-icon"></div>
            <div className="my-projects__menu__link-text">Выйти</div>
        </div>

      </div>
      

      </div>
      <div className="my-projects__main">
        <div className="my-projects__main__title">
            Мои проекты 
        </div>
        <div className="my-projects__main__header">
            <div className="my-projects__main__header--title">
                Мои проекты
            </div>
            {/* <div className="my-projects__main__header--user-info">
                <div className="my-projects__main__header--user-info__search"></div>
                <div className="my-projects__main__header--user-info__notification"></div>
                <div className="my-projects__main__header--user-info__avatar"></div>
            </div> */}
        </div>
        <div className="my-projects__main__projects">
            <div className="my-projects__main__project">
                <div className="my-projects__main__project-header">
                    <div className="my-projects__main__project-header__icon"></div>

                    <div className="my-projects__main__project-header__text">
                        <div className="my-projects__main__project-header__title">Текущие</div>
                        <div className="my-projects__main__project-header__description">Работаем не покладая рук</div>
                    </div>
                </div>

                <div className="my-projects__main__project__separator"/>

                <div className="my-projects__main__project-list">
                    <div className="my-projects__main__project-link">Разработка санитарно-защитной зоны</div>
                    <div className="my-projects__main__project-link">Регистрация ОПО</div>
                    <div className="my-projects__main__project-link">Разработка проекта ПДВ</div>

                </div>
            </div>

            <div className="my-projects__main__project">
                <div className="my-projects__main__project-header">
                    <div className="my-projects__main__project-header__icon"></div>
                    
                    <div className="my-projects__main__project-header__text">
                        <div className="my-projects__main__project-header__title">Текущие</div>
                        <div className="my-projects__main__project-header__description">Работаем не покладая рук</div>
                    </div>
                </div>

                <div className="my-projects__main__project__separator"/>

                <div className="my-projects__main__project-list">
                    <div className="my-projects__main__project-link">Разработка санитарно-защитной зоны</div>
                    <div className="my-projects__main__project-link">Регистрация ОПО</div>
                    <div className="my-projects__main__project-link">Разработка проекта ПДВ</div>

                </div>
            </div>

            <div className="my-projects__main__project">
                <div className="my-projects__main__project-header">
                    <div className="my-projects__main__project-header__icon"></div>
                    
                    <div className="my-projects__main__project-header__text">
                        <div className="my-projects__main__project-header__title">Текущие</div>
                        <div className="my-projects__main__project-header__description">Работаем не покладая рук</div>
                    </div>
                </div>

                <div className="my-projects__main__project__separator"/>

                <div className="my-projects__main__project-list">
                    <div className="my-projects__main__project-link">Разработка санитарно-защитной зоны</div>
                    <div className="my-projects__main__project-link">Регистрация ОПО</div>
                    <div className="my-projects__main__project-link">Разработка проекта ПДВ</div>

                </div>
            </div>

        </div>

        <div className="my-projects__main__footer">
            <div className="my-projects__main__footer__year">
                © 1991-2022 Группа Компаний Триада. Все права защищены.
            </div>
            <div className="my-projects__main__footer__about">
                <div className="my-projects__main__footer__about-text">О компании</div>
                <div className="my-projects__main__footer__about-text">Услуги</div>
                <div className="my-projects__main__footer__about-text">Контакты</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
