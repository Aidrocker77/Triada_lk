import '../styles/SettingsPage.scss'

const SettingsPage=()=>{
    return (
        <div className="settings">
          <div className="settings__menu">
    
          <div className="settings__menu__logo"/>
    
          <div className="settings__menu__separator"/>
    
          <div className="settings__menu__link-wrappers">
    
            <div className="settings__menu__link ">
                <div className="settings__menu__link-icon"></div>
                <div className="settings__menu__link-text">Мои проекты</div>
            </div>
            <div className="settings__menu__link">
                <div className="settings__menu__link-icon"></div>
                <div className="settings__menu__link-text">Консультирование</div>
            </div>
            <div className="settings__menu__link">
                <div className="settings__menu__link-icon"></div>
                <div className="settings__menu__link-text">База знаний</div>
            </div>
            <div className="settings__menu__link active">
                <div className="settings__menu__link-icon"></div>
                <div className="settings__menu__link-text">Настройки</div>
            </div>
    
            <div className="settings__menu__link">
                <div className="settings__menu__link-icon"></div>
                <div className="settings__menu__link-text">Выйти</div>
            </div>
    
          </div>
          
    
          </div>
          <div className="settings__main">
            <div className="settings__main__title">
                Настройки 
            </div>
            <div className="settings__main__header">
                <div className="settings__main__header--title">
                Настройки   
                </div>
                {/* <div className="settings__main__header--user-info">
                    <div className="settings__main__header--user-info__search"></div>
                    <div className="settings__main__header--user-info__notification"></div>
                    <div className="settings__main__header--user-info__avatar"></div>
                </div> */}
            </div>
            <div className="settings__main__projects">
                <div className="settings__main__project">
                    <div className="settings__main__project-header">
                            <div className="settings__main__project-header__title">Изменить пароль</div>
                    </div>
    
    
                    <div className="settings__main__project-list">
                        <div className="settings__main__project-link">
                            <label htmlFor="oldPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='oldPassword' placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="newPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='newPassword' placeholder='Минимум 8 символов' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="repeatPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='repeatPassword'  className="settings__main__project-link__input" />
                        </div>
                        <button className='settings__main__project-button'>Сохранить</button>
                    </div>
                </div>
    
                <div className="settings__main__project">
                    <div className="settings__main__project-header">
                            <div className="settings__main__project-header__title">Изменить пароль</div>
                    </div>
    
    
                    <div className="settings__main__project-list">
                        <div className="settings__main__project-link">
                            <div className="settings__main__project-link__text">Изменить номер телефона</div>
                            <div className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="newPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='newPassword' placeholder='Минимум 8 символов' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="repeatPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='repeatPassword'  className="settings__main__project-link__input" />
                        </div>
                        <button className='settings__main__project-button'>Сохранить</button>
                    </div>
                </div>
    
                <div className="settings__main__project">
                    <div className="settings__main__project-header">
                            <div className="settings__main__project-header__title">Изменить пароль</div>
                    </div>
    
    
                    <div className="settings__main__project-list">
                        <div className="settings__main__project-link">
                            <label htmlFor="oldPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='oldPassword' placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="newPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='newPassword' placeholder='Минимум 8 символов' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="repeatPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <input type="text" id='repeatPassword'  className="settings__main__project-link__input" />
                        </div>
                        <button className='settings__main__project-button'>Сохранить</button>
                    </div>
                </div>
    
            </div>
                
            <div className="current-project__main__questions"/>

            <div className="settings__main__footer">
                <div className="settings__main__footer__year">
                    © 1991-2022 Группа Компаний Триада. Все права защищены.
                </div>
                <div className="settings__main__footer__about">
                    <div className="settings__main__footer__about-text">О компании</div>
                    <div className="settings__main__footer__about-text">Услуги</div>
                    <div className="settings__main__footer__about-text">Контакты</div>
                </div>
            </div>
          </div>
        </div>
      );
}

export default SettingsPage;