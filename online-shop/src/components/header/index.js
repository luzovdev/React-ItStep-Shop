import React,{useState} from "react";
import {Outlet,NavLink,useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { selectIsAuth, login } from "../../redux/slices/userAuth";
import { AddToCardButton } from "../addToCardButton";
import styles from './index.module.css';

export const Header = () => {
    // const dispatch = useDispatch();
    // const auth = useSelector(selectIsAuth);
    // const [isLogin,setIsLogin] = useState(false);

    // const loginHandler = () => {
    //     setIsLogin((prev) => !prev)
    //     dispatch(login(!auth))
    // }

    const navigate = useNavigate();
    const activeClassName = ({isActive}) => isActive ? styles.activeRoute: styles.route;
  
    const navigateToCart = () => navigate('/cart');
  
    return (
      <>
        <nav className={styles.wrapper}>
          <p className={styles.userName}>USER NAME</p>
          <NavLink  to='/login' className={activeClassName}>logout</NavLink>
          <NavLink to='/contacts' className={activeClassName}>contacts</NavLink>
          <NavLink to='/' className={activeClassName}>shop</NavLink>
          <AddToCardButton handleClick={navigateToCart} size="s"/>
        </nav>
        <Outlet/>
      </>
    );
}

