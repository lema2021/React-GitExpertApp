import React from 'react'

export const Item = ({ id, title, url}) => {
    return (
        <div className='card-secundaria'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
