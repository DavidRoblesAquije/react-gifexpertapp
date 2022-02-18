import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['one punch']);

    // const handleAdd = () => {
    //     // setcategories(['otro anime', ...categories]);

    //     setcategories( cats => [...categories, 'otra categoria'])
    // }

    return (
        <>
            <h2> GiftExpertApp</h2>
            <AddCategory setcategories={setcategories} />

            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GiftGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}
