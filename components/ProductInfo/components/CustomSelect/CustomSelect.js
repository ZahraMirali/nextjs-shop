import style from './CustomSelect.module.scss'

const customSelect = ({ children, width }) => {
    return (
        <select className={style.container} style={{ width }}>
            {children}
        </select>
    )
}

export default customSelect;
