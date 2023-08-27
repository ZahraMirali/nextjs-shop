import style from './Description.module.scss'

const Description = ({ description }) => {
    return (
        <div className={style.container}>
            <h5>DESCRIPTION</h5>
            <div className={style.descriptionText}>
                {description}
            </div>
        </div>
    )
}

export default Description;