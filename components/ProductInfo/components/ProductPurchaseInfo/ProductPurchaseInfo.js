import style from './ProductPurchaseInfo.module.scss'
import ProductColor from '../ProductColor/ProductColor' ;
import CustomSelect from '../CustomSelect/CustomSelect'

const ProductPurchaseInfo = () => {
    return (
        <div className={style.container}>
            <div className={style.colorContainer}>
                <h5>COLOR</h5>
                <div className={style.colorPickerList}>
                    <ProductColor color='#9e9e9e' />
                    <ProductColor color='#63F3C9' />
                    <ProductColor color='#7ACAAE' />
                    <ProductColor color='#559B8E' />
                    <ProductColor color='#FF7A76' />
                </div>
            </div>
            <div className={style.separator} />
            <div>
                <h5>SIZE</h5>
                <CustomSelect width={80}>
                    <option>(UK 8)</option>
                    <option>(UK 10)</option>
                    <option>(UK 12)</option>
                    <option>(UK 14)</option>
                </CustomSelect>
            </div>
            <div className={style.separator} />
            <div>
                <h5>QTY</h5>
                <CustomSelect width={50}>
                    <option>(1)</option>
                    <option>(2)</option>
                    <option>(3)</option>
                    <option>(4)</option>
                </CustomSelect>
            </div>
        </div>
    )
}

export default ProductPurchaseInfo;