import style from './Product.module.scss'
import ImageBox from "../ImageBox/ImageBox";
import ProductInfo from "../ProductInfo/ProductInfo";

const Product = ({ product }) => {

    return (
        <div className={style.productContainer}>
            <ImageBox imageSrc={product.image} productName={product.title} />
            <ProductInfo product={product} />
        </div>
    )
}

export default Product;