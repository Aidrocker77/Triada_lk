import FormAuthorization from './FormAuthorization';

import '../styles/Authorization.scss';


function Authorization () {
    
    return(
        <div className="authorization">
            <div className="authorization__form-wrapper">
                <div className="authorization__form-wrapper__link">Вернуться на сайт</div>   
                    <FormAuthorization/>           
                <div className="authorization__form-wrapper__footer-rights">© 1991-2022 Группа Компаний Триада. Все права защищены.</div>
            </div>
            <div className="authorization__logo-wrapper md-hidden">
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