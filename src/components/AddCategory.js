

import React, {useState} from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        
        if( inputValue.trim().length > 2 ) {

            setCategories( cat => [ inputValue, ...cat ]);
            setInputValue('');
        }
    }

    return (

        <div className='formulario'>

          <h4>Add Category:</h4> 

          <form onSubmit={handleSubmit}>
          
            <input
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}>
            </input> 

          </form>
          
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


