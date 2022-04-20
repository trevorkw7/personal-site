import React from 'react';


const ImageHolder = (props) => {
    // requires path to image
    return (
        <div className='flex-auto w-6/12 p-20'>
            <img className='w-full h-full object-contain' src={props.path} alt={props.alt} />

        </div>
    )
}

export default ImageHolder;