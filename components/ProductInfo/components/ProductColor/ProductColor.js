import style from './ProductColor.module.scss'

const ProductColor = ({ color }) => {
    return (
        <div className={style.container} style={{ border: `2px solid ${color}` }}>
            <div className={style.innerColor} style={{ backgroundColor: color }}/>
        </div>
    )
}

export default ProductColor;