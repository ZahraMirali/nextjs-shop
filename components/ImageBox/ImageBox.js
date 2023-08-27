import PropTypes from 'prop-types';
import style from './ImageBox.module.scss'

const ImageBox = ({ imageSrc, productName }) => {
    return (
        <div className={style.imageContainer}>
            <img
                src={imageSrc}
                alt={productName}
            />
        </div>
    )
}

ImageBox.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
};

export default ImageBox;