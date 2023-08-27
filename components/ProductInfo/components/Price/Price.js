import style from './Price.module.scss'

const Price = ({ price }) => {
    return (
        <div className={style.container}>
            {`$${price}`}
        </div>
    )
}

export default Price;