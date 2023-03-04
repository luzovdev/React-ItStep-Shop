import { bindActionCreators,createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts, setIsLoading, setError } from "../slices/products";
import {store} from '../index';
import { fetchProducts } from '../../utils/fetchProducts';


export const actions = bindActionCreators({
    setProducts,
    setIsLoading,
    setError
},store.dispatch);


export const getProducts = createAsyncThunk(
    'products/fetchProducts',
    (_, {dispatch}) => {
        const {setProducts,setIsLoading,setError} = actions;
        setIsLoading(true);
        fetchProducts(true)
        .then(({products}) => {
           setProducts(products);
            setIsLoading(false);
        })
        .catch ((err)=>{
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        })

    }
);