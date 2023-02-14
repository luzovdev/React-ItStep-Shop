import React from "react";
import { AddToCardButton } from "../components/addToCardButton";
import {useParams} from "react-router-dom"
export const Product = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>Tovar {productId}</h2>
            <div>Price</div>
            <div>Description</div>
            <AddToCardButton size="m"/>
        </div>
    );
};