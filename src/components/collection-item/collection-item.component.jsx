import React from 'react' ;

import './collection-item.styles.scss';

const CollectionItem = ({id , name , price, imageUrl}) => (

    <div className="collection-item">
        <div className="image"
        style={{
            backgroundImage : `url(${imageUrl})` 
        }}  >
            </div>

        <div className="collection-footer">

            <span className="price">{price}</span>
            <span className="name">{name}</span>
        </div>
    </div>

);


export default CollectionItem;