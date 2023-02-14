import React from "react";
import filterIcon from '../../assets/filter_icon.png';
import styles from './index.module.css'
export const FilterProducts = () => {
    return  <button className={styles.filterButton}><img src={filterIcon}/></button>
};