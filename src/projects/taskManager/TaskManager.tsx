import React from 'react';
import s from "./TaskManager.module.css"
import taskManager from "../../assets/taskManager2.bmp"
const TaskManager = () => {
    return (
        <div className={s.main}>
         <div className={s.header}>Task manager</div>
            <div className={s.about}>
                <div className={s.technologies}>
                    <ul>
                        <li>React(function components)</li>
                        <li>Typescript</li>
                        <li>Redux</li>
                        <li>Material UI</li>
                        <li>Rest API (Samuraijs.com)</li>
                        <li>Story book</li>
                        <li>Unit tests React-library tests</li>
                    </ul>
                </div>
                <div className={s.show}>
                    <img src={taskManager} alt="taskManager" className={s.img}/>
                    <div className={s.buttons}>
                        <button className={s.btn}><a
                            href="https://github.com/KhekhaevSelim/task-manager"
                            className={s.link}
                        >код</a></button>
                        <button className={s.btn}>
                            <a
                                href="https://khekhaevselim.github.io/task-manager/"
                                className={s.link}
                            >поиграться</a>
                            </button>
                    </div>
                </div>
            </div>
            <div className={s.description}>
            <p>Это веб приложение диспетчер задач с готовым бекендом. Пользуйтесь бесплатным аккаунтом для тестирования.
            Вы можете добавлять новый список задач с подзадачами, можете фильтровать подзадачи, менять статус,удалять. Для
                того чтобы изменить наименование задач/подзадач щелкните дважды по названию.
            </p>
            </div>
        </div>
    );
};

export default TaskManager;