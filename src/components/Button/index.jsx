import React from 'react'

export default function Button({type, text=false, style, onClick, icon=false}) {
    return (
        <button type={type} onClick={onClick} className={`${style}`} >
            {icon && <span className='material-icons'>{icon}</span>}
            {text && <span className='text-sm font-semibold'>{text}</span>}
        </button>
    )
}
