import styles from './index.module.css'
import cartIcon from '../../assets/cart_icon.png';
export  const ProductItem = ({image,name,description,price, category}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title} >{name}</h1>
            <p className={styles.category}>{category}</p>
            <div className={styles.productImage}>
                <img src={image} alt= 'product'/>
            </div>
            <div className={styles.description} >{description}</div>
            <div className={styles.priceWrapper}>
                <p className={styles.price}>{price}</p>
                <button className={styles.addToCartButton}>
                    <img src={cartIcon} alt='cart' />
                </button>
            </div>
        </div>
    )
}

