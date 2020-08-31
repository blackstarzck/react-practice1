import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] // STYLE[0]은 defult값 상단에 있는 변수 중 STYLE변수 값 중 두개 다 없을 경우 default값으로 [0]을 적용하겠다라는 말.
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        </Link>
    )
};