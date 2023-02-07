import React, {useEffect, useState} from "react";
import {ProductsList} from '../components/productList/productsList';
import {ProductsSearch} from '../components/productSearch/productSearch';
import {fetchProducts} from '../utils/fetchProducts'
import { Preloader } from "../components/preloader";


export const Shop = () => {

    const [products,setProducts] = useState(null);
    

    useEffect(() => {
        fetchProducts()
        .then(({products : goods}) => {
            setProducts(goods);
        })
    },[]);

    return (
        <>
            <ProductsSearch/>
            {products ? <ProductsList products={products} /> : <Preloader />}
        </>
     );
};