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
    
                    <form action="#" className="settings__main__project-list">{
                        <div className="settings__main__project-link">
                            <label htmlFor="oldPassword" className="settings__main__project-link__label">Старый пароль</label>
                            <div className="settings__main__project-link__icon"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1.875C11.8425 1.875 14.3775 3.4725 15.615 6C14.3775 8.5275 11.85 10.125 9 10.125C6.15 10.125 3.6225 8.5275 2.385 6C3.6225 3.4725 6.1575 1.875 9 1.875ZM9 0.375C5.25 0.375 2.0475 2.7075 0.75 6C2.0475 9.2925 5.25 11.625 9 11.625C12.75 11.625 15.9525 9.2925 17.25 6C15.9525 2.7075 12.75 0.375 9 0.375ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM9 2.625C7.14 2.625 5.625 4.14 5.625 6C5.625 7.86 7.14 9.375 9 9.375C10.86 9.375 12.375 7.86 12.375 6C12.375 4.14 10.86 2.625 9 2.625Z" fill="#A3AED0"/>
                                    </svg></div>
                                    <input type="text" 
                                id='oldPassword' 
                                placeholder='&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;' 
                                className="settings__main__project-link__input" />
                        </div>}
                        <div className="settings__main__project-link">
                            <label htmlFor="newPassword" className="settings__main__project-link__label">Новый пароль</label>
                            <input type="text" id='newPassword' placeholder='Минимум 8 символов' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="repeatPassword" className="settings__main__project-link__label">Повторите пароль</label>
                            <input type="text" id='repeatPassword'  className="settings__main__project-link__input" />
                        </div>
                        <button className='settings__main__project-button'>Сохранить</button>
                    </form>
                </div>
    
                <form action="#" className="settings__main__project">
                    <div className="settings__main__project-header">
                            <div className="settings__main__project-header__title">Изменить номер телефона</div>
                    </div>
    
    
                    <div className="settings__main__project-list">
                        <div className="settings__main__project-list__data">
                            <div className="settings__main__project-list__data-descr">Текущий номер</div>
                            <div className="settings__main__project-list__data-current">+7(929)412-24-42</div>
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="newPhone" className="settings__main__project-link__label">Новый номер<span>*</span></label>
                            <input type="text" id='newPhone' placeholder='+7' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link__text">Мы отправим код для подтверждения</div>
                        <button className='settings__main__project-button active-buttoon'>Сохранить</button>
                    </div>
                </form>
    
                <form action="#" className="settings__main__project">
                    <div className="settings__main__project-header">
                            <div className="settings__main__project-header__title">Изменить пароль</div>
                    </div>
    
    
                    <div className="settings__main__project-list">
                        <div className="settings__main__project-list__data">
                            <div className="settings__main__project-list__data-descr">Текущий email</div>
                            <div className="settings__main__project-list__data-current">info@triadacompany.ru</div>
                        </div>
                        <div className="settings__main__project-link">
                            <label htmlFor="newEmail" className="settings__main__project-link__label">Новый email<span>*</span></label>
                            <input type="text" id='newEmail' placeholder='' className="settings__main__project-link__input" />
                        </div>
                        <div className="settings__main__project-link__text">Мы отправим код для подтверждения</div>
                        <button className='settings__main__project-button active-buttoon'>Сохранить</button>
                    </div>
                </form>
    
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