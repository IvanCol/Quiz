import React from 'react'
import classes from './FinishedQuiz.module.scss'

const FinishedQuiz = () => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    <i className={''} />
                </li>

            </ul>
            <p>
                Правильной 1/2
            </p>
            <div>
                <button>
                    Повторить
                </button>
            </div>
        </div>
    )
}

export default FinishedQuiz
