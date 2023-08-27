import style from './ProductTitle.module.scss'

const ProductTitle = ({ title, category,}) => {
    return (
        <div className={style.container}>
            <h1>{title}</h1>
            <h4>{category}</h4>
        </div>
    )
}

export default ProductTitle;