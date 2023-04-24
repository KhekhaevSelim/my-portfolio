import React from 'react';
import s from "./SearchBooks.module.css";
import searchBooks from "../../assets/searchBooks2.bmp";

const SearchBooks = () => {
    return (
        <div className={s.main}>
            <div className={s.header}>Search books</div>
            <div className={s.about}>
                <div className={s.technologies}>
                    <ul>
                        <li>React(function components)</li>
                        <li>Typescript</li>
                        <li>Redux</li>
                        <li>CSS-module</li>
                        <li>Rest API(Google API Books)</li>
                    </ul>
                </div>
                <div className={s.show}>
                    <img src={searchBooks} alt="searchBooks" className={s.img}/>
                    <div className={s.buttons}>
                        <button className={s.btn}>
                            <a
                                href="https://github.com/KhekhaevSelim/search-book-app"
                                className={s.link}
                            >код</a>
                            </button>
                        <button className={s.btn}>
                            <a
                                href="https://khekhaevselim.github.io/search-book-app/"
                                className={s.link}
                            >поиграться</a>
                            </button>
                    </div>
                </div>

            </div>
            <div className={s.description}>
                <p>Это веб приложение для поиска книг с использованием Google API Books. Введите название интересующей вас книги
                    и нажмите enter или клинике по значку поиска. Добавлена возможность сортировки по некоторым жанрам и релевантности
                </p>
            </div>
        </div>
    );
};

export default SearchBooks;