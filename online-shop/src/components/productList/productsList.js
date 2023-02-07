import React from "react";
import {ProductItem} from "../productItem/productItem";
import styles from './index.module.css'


export const ProductsList = ({products}) => {
    return (
        <>
        <div className={styles.productList}>
          {products.map(product => <ProductItem image = {product.img} name = {product.name} description = {product.description} price = {product.price} category = {product.category} key = {product.id}/>)}
          </div>
    </>
    );
};