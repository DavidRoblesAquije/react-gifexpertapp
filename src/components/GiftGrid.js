import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
import { getGift } from '../helpers/getGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const { data, loading } = useFetchGifts(category);

    const myimages = data.map(img => (
        <GiftGridItem
            key={img.id}
            {...img}
        />
    ))

    return (
        <>
            <h3 className='animate__animated animate__fadeInLeft'>{category}</h3>

            {loading ? <p className='animate__animated animate__flash'>Loading...</p> : null}

            <div className='card-grid'>{myimages}</div>
        </>
    );
};

export default GiftGrid;
