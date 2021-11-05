import React from 'react'
import Days from '../days/Days'
import Select from '../select/Select'
import styles from "./container.module.css"

function Container() {
    return (
        <div className={styles.container}>
            <Select />
            <Days />
        </div>
    )
}

export default Container
