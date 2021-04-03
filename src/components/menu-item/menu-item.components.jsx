import React from 'react' ;

import './menu-item.styles.scss' ;

const MenuItem = ({key , title , image, size}) => (
    <div  className= {`${size} menu-item`}>
        <div className="background-image" style= {{
        backgroundImage: `url(${image})`
    }}  >

    </div>
                <div className="content">
                    <h1 className="title"> {title.toUpperCase()}</h1>
                    <span className="subtite">Shop Now</span>
                </div>
            </div>
);


export default MenuItem ;