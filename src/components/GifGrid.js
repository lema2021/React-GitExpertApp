import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Item } from './Item';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category ); 

    return (

        <div className='card-grid'>

            
               
            <h3 className='titulo'>{category}</h3>

            { loading && <p>Loading...</p>}
            
            {
                images.map( img =>(
                    <Item
                        key={img.id}
                        {...img}
                    />
                ))
            }

        </div>
    )
}
