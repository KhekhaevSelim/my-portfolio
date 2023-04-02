import React from 'react';
import r from "./RemoteWork.module.css"
const RemoteWork = () => {
    return (
        <div className={r.main}>
            <div className={r.container}>
                <h3 className={r.title}>Рассматриваю работу онлайн/оффлайн</h3>
                 <button className={r.button}>нанять меня </button>
            </div>

        </div>
    );
};

export default RemoteWork;