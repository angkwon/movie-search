import React from 'react'
import './Button.scss'

const Button =({
    children,
    type,
    ...rest
}) => {

    return (
        <button
            className={ `btn ${ type }`}
            { ...rest }
        >
            { children }
        </button>
    )
}

export default Button