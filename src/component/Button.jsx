import React from 'react'

const Button = ({ label,isActive, onClick }) => {
    return (
        <button type="button" onClick={onClick} className={`btn btn-primary m-2 ${!isActive && 'active'}`}>{label}</button>
    )
}

export default Button
