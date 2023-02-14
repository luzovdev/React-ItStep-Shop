import React from "react";
import { ProductsSearch } from "../productSearch/productSearch";
import { FilterProducts } from "../filterProducts";
import styles from './index.module.css'
export const ShopMainFilter = () => {
    return (
        <div className={styles.searchWrapper}>
            <ProductsSearch/>
            <FilterProducts/>
        </div>
    )
}