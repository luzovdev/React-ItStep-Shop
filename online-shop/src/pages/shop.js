import React, {useEffect, useState} from "react";
import {ProductsList} from '../components/productList/productsList';
import {fetchProducts} from '../utils/fetchProducts'
import { Preloader } from "../components/preloader";
import { ShopMainFilter } from "../components/shopMainFilter";

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
            <ShopMainFilter/>
            {products ? <ProductsList products={products} /> : <Preloader />}
        </>
     );
};