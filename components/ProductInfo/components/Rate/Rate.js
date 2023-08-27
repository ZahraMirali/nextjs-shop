import style from './Rate.module.scss';
import { Rating } from 'react-simple-star-rating'

const Rate = ({ rate }) => {
    return (
        <div className={style.container}>
            <Rating
                initialValue={rate.rate}
                size={25}
                transition
                allowHalfIcon
                readonly
                fillColor='#FF7A76'
                emptyColor='#9e9e9e'
            />
        </div>
    )
}

export default Rate;