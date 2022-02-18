import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({ setcategories }) => {


    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            //setcategories
            setcategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )

}


AddCategory.propTypes = {
    setcategories: Proptypes.func.isRequired
}