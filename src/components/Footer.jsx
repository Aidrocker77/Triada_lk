import React from 'react';
import '../styles/Footer.scss';

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="footer__year">
                © 1991-2022 Группа Компаний Триада. Все права защищены.
            </div>
            <div className="footer__about">
                <div className="footer__about-text">О компании</div>
                <div className="footer__about-text">Услуги</div>
                <div className="footer__about-text">Контакты</div>
            </div>
        </div>
    )
};

export default FooterComponent;