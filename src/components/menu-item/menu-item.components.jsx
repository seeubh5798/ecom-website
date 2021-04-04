import React from 'react' ;

import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss' ;

const MenuItem = ({key , title , image, size, link, history, match}) => (
    <div  className= {`${size} menu-item`} onClick={()=>history.push(`${match.url}${link}`)}>
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


export default withRouter(MenuItem) ;