import CustomButton from './CustomButton';
import {Checkbox, FormControlLabel} from '@mui/material';
import React from "react";

import '../styles/FormAuthorization.scss'

const FormAuthorization=()=>{
            return(
                <form action='#' className="authorization__form-wrapper__form form">
                    <div className="form__form-title">Вход в личный кабинет</div>
                    <div className="form__form-prompt">Для входа введите свой логин и пароль</div>

                    <label className='form__form-label' htmlFor="email">Email<span>*</span></label>                    
                    <input type="email" 
                    id='email'
                    placeholder="Ваша почта" 
                    className="form__form-input" />

                    <label className='form__form-label' htmlFor="password">Пароль<span>*</span></label>
                    <div className="form__form-label__icon"><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1.875C11.8425 1.875 14.3775 3.4725 15.615 6C14.3775 8.5275 11.85 10.125 9 10.125C6.15 10.125 3.6225 8.5275 2.385 6C3.6225 3.4725 6.1575 1.875 9 1.875ZM9 0.375C5.25 0.375 2.0475 2.7075 0.75 6C2.0475 9.2925 5.25 11.625 9 11.625C12.75 11.625 15.9525 9.2925 17.25 6C15.9525 2.7075 12.75 0.375 9 0.375ZM9 4.125C10.035 4.125 10.875 4.965 10.875 6C10.875 7.035 10.035 7.875 9 7.875C7.965 7.875 7.125 7.035 7.125 6C7.125 4.965 7.965 4.125 9 4.125ZM9 2.625C7.14 2.625 5.625 4.14 5.625 6C5.625 7.86 7.14 9.375 9 9.375C10.86 9.375 12.375 7.86 12.375 6C12.375 4.14 10.86 2.625 9 2.625Z" fill="#A3AED0"/>
                        </svg></div>  
                    <input type="text   " 
                    id='password'
                    placeholder="Ваш пароль" 
                    className="form__form-input" />                  

                    <div className="form__form-action">                      
                        <FormControlLabel  control={<Checkbox default
                                            sx={{
                                            '&.Mui-checked': {
                                                color: '#F0C988',
                                            },
                                            }}/>} 
                                label="Запомнить меня"/>                        
                        <div className="form__form-action__restore-pass">Забыли пароль?</div>
                    </div>
                    <CustomButton content={'Войти в личный кабинет'}/>
                    <div className="form__form-link-create-account">Еще не зарегистрированы? <span>Создайте аккаунт </span></div>    

                </form> 
                )
}

export default FormAuthorization;