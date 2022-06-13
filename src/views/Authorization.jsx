import '../styles/Authorization.scss';

function Authorization () {

    // TODO--добавить иконку стрелки на authorization__form-wrapper__link
    // беграунд чекбокса поменять на желтый 
    // сверить отступы когда подключится шрифт
    
    return(
        <div className="authorization">
            <div className="authorization__form-wrapper">
                <div className="authorization__form-wrapper__link">Вернуться на сайт</div>   
                <div className="authorization__form-wrapper__form form">
                    <div className="form__form-title">Вход в личный кабинет</div>
                    <div className="form__form-prompt">Для входа введите свой логин и пароль</div>

                    <label className='form__form-label' forForm="email">Email<span>*</span></label>
                    <input type="email" 
                    id='email'
                    placeholder="Ваша почта" 
                    className="form__form-email" />

                    <label className='form__form-label' forForm="password">Пароль<span>*</span></label>  
                    <input type="text   " 
                    id='password'
                    placeholder="Ваш пароль" 
                    className="form__form-password" />                  

                    <div className="form__form-action">
                        <input type="checkbox" id='memo-pass'  placeholder="Запомнить меня" className="form__form-action__memo-pass" />
                        <label className='form__form-action__checkbox-label' forForm="memo-pass">Запомнить меня</label>
                        <div className="form__form-action__restore-pass">Забыли пароль?</div>
                    </div>

                    <button className='form__form-button'>Войти в личный кабинет</button>
                    <div className="form__form-link-create-account">Еще не зарегистрированы? <span>Создайте аккаунт </span></div>    

                </div>
                <div className="authorization__form-wrapper__footer-rights">© 1991-2022 Группа Компаний Триада. Все права защищены.</div>
            </div>

            <div className="authorization__logo-wrapper">
                 <div className="authorization__logo-wrapper__logo" />
                 <div className="authorization__logo-wrapper__nav">
                    <div className="authorization__logo-wrapper__nav-link">О компании</div>
                    <div className="authorization__logo-wrapper__nav-link">Услуги</div>
                    <div className="authorization__logo-wrapper__nav-link">Контакты</div>
                 </div>
            </div>
        </div>
    )
}

export default Authorization;