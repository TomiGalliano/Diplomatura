import React from 'react';

const productoItem = (props) => {
    return (
        <div className='productos'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr/>
        </div>
        
    );
}

export default productoItem;