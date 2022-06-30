import React from "react";
import Menu from '../components/Menu';
import FooterComponent from '../components/Footer';

import IndustrialSafetyIcon from '../components/icons/IndustrialSafetyIcon';
import EnvironmentalSafetyIcon from '../components/icons/EnvironmentalSafetyIcon';

import '../styles/BaseKnowledge.scss';

function MyProjects() {
  return (
    <div className="base-knowledge">
        <Menu/>
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
                            <IndustrialSafetyIcon/>
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

                        <div className="item-accordion">
                            <div className="item-accordion__header">
                                <div className="item-accordion__text">
                                    Опасный производственный объект
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
                                    Регистрация опасного производственного объекта
                                </div>
                                <div className="item-accordion__list__item">
                                    Лицензия на эксплуатацию опасного производственного объекта
                                </div>
                                <div className="item-accordion__list__item">
                                    Паспорт опасного производственного объекта
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            Положение о расследовании инцидентов
                        </div>

                        <div className="item">
                            Производственный контроль
                        </div>
                        <div className="item">
                            План ликвидации аварий ПМЛА
                        </div>
                        <div className="item">
                            Декларация промышленной безопасности
                        </div>
                        <div className="item">
                            Система управления промышленной безопасностью
                        </div>
                        <div className="item">
                            Экспертиза промышленной безопасности
                        </div>
                        <div className="item">
                            Комплексное экологическое разрешение (КЭР)
                        </div>
                        <div className="item">
                            Аудит промышленной безопасности
                        </div>
                    </div>
                </div>
                <div className="base-knowledge__main__block">
                    <div className="base-knowledge__main__block__header">
                        <div className="base-knowledge__main__block__icon">
                            <EnvironmentalSafetyIcon/>
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

                        <div className="item">
                            Инвентаризации выбросов опасных веществ
                        </div>

                        <div className="item">
                            Постановка на учет объектов НВОС (негативного воздействия на окружающую среду)
                        </div>

                        <div className="item">
                            Проект нормативов образования отходов (ПНООЛР)
                        </div>

                        <div className="item">
                            Паспорт отходов
                        </div>

                        <div className="item">
                            Программа экологического контроля (ПЭК)
                        </div>

                        <div className="item">
                            Проект зоны санитарной охраны (ЗСО)
                        </div>

                        <div className="item">
                            Декларация о воздействии на окружающую среду (ДВОС)
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

           <FooterComponent/>
        </div>
    </div>
  );
}

export default MyProjects;
