import React from 'react'

export default function Button({text=false, style, onClick, icon=false}) {
    return (
        <button className={`${style}`} >
            {icon && <span className='material-icons'>{icon}</span>}
            {text && <span className='text-sm font-semibold'>{text}</span>}
        </button>
    )
}
