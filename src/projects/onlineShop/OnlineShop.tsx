import React from 'react';
import s from "./OnlineShop.module.css";
import onlineShop from "./../../assets/online-shop.bmp";

const OnlineShop = () => {
    return (
        <div className={s.main}>
            <div className={s.header}>online shop</div>
            <div className={s.about}>
                <div className={s.technologies}>
                    <ul>
                        <li>React(classes components)</li>
                        <li>Javascript</li>
                        <li>Without state management</li>
                        <li>Native CSS</li>
                    </ul>
                </div>
                <div className={s.show}>
                    <img src={onlineShop} alt="onlineShop" className={s.img}/>
                    <div className={s.buttons}>
                        <button className={s.btn}>
                            <a
                                href="https://github.com/KhekhaevSelim/online-shop"
                                className={s.link}
                            >смотреть код</a>
                            </button>
                        <button className={s.btn}>
                            <a
                                href="https://khekhaevselim.github.io/online-shop/"
                                className={s.link}
                            >поиграться</a>
                            </button>
                    </div>

                </div>

            </div>
            <div className={s.description}>
                <p>Это прототип интернет магазине без использования API и стейт менеджмента. Товары разложены
                    в стандартном варианте, есть возможность добавления товаров в корзину, автоматического подсчёта
                    итоговой суммы, удаления товара из корзины.
                </p>
            </div>
        </div>
    );
};

export default OnlineShop;