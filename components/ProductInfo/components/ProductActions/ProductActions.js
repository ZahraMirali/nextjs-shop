import style from './ProductActions.module.scss'

const ProductActions = () => {

    return (
        <div className={style.container}>
            <button>
                ADD TO CARD
                <img
                    alt='shoping-card-icon'
                    src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/ffffff/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                />
            </button>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADt0lEQVRogc2ZzU4UQRDHfywLJggXEw9qjFdkUQ8+gGBiPIm4WfCCejFBUD58CA168uPsQeRD8CF8AE0QUEQE1MT4AKAgUcFDVafHdXd2Znp2Zv/JZHaH7ur6L9XVVf+B2kID0AtMAcvAd72WgUn9W2Nq3gVEHlgF9ipcq8CllHz0RQa4j3V0HhgC2oD9euWAEWDBM25M59YMDImfQD/+zmWAAR1ryNQE8lgSHSHmdWDJdFfBr1DYB6whzvRHmD+ocz8iSSI19Kojb4gW6/XAotoopLlZ8np/AuxGmP9H50LK4fUB+TWPO9jIqY3lWDyKgCxy0O0BzQ52WtTGRtKhlQWuAe+R8wHgYMI+OCELXEUyTPFJfdLBbjsJhVY9QmAF6/gy0AdM6/chB/u31cYzNzfLw49AvY4p6PNFoqfft2qj4OhvSeNXsBmpFAGDLLCuYwYirHVL567gcyA28n85/QM5iaeAy0WTwxDw4oKO3QbOhiDRCewg509XuUF5bOngd31Byuk+dToMAS+e6rxd4E6FefXIf2JH59wtNahUOT2MLaebgFYkDOZKEAtL4ATwAjmhvXbeedZtQs6ZdmRjmz2xqyRK7q0w5XQdcB0JiT3gZQgC7UUEtoHHyI/wicqRsEKFcDIkzgR0CCRWDZmLAQjMFhF4BBzxjGkAepC2dg3Zl5vAEpJiC1TY2HGU0+tlFskBMxUIxAJTTs8TLZ9nsOV03vM8BzznXwIPgcMuzvphShcadrAxrDbGkU2aKAEDk/vbHGycwjptCGwBD0iAgMGGLtziYOMANqsYAofcXQuOuMr4XzHZcUIcoXWalEMrA7zWz+cc7HTqfRY5sWcQlWQESe2JbHaTfheIXk4vUQPptxGruUYpp01zs46U5sVI7EAEqWKjKH7nsZVo2fpHEaREaURahGmk7toigho/hiUziH8RWAfc1IXiLBo/E4Man/GQMS3oKBIazVhVfAhbTlejjF9AfqRWpIyPrMZ3U1rtqFZjNY5N14MVnAutxjcgJfMEokFtYlvdSeJrdbuw4dXpM64YVVfjwxBqwDZSNyKslYgaH0QO6tHnsajxjv4GWqySQDfiYH9UbUy4uRkcfpJpzsFuamp8Bgkp7x5yaR+MGr/p7lo0eF8rxEEk8dcKBr+Br/r5qIOdY3r/luartzm9u7QPZu4rR1+cYNKvS/tQNTU+DFzbh0BqfFLoJlr7EEiNTxph2odAanxayAD3KN8+hFbj00bQ9sFXja8VGDXe2z4EUuP/Al2btxGwXco3AAAAAElFTkSuQmCC"/>
        </div>
    )
}

export default ProductActions;