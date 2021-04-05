import React from 'react' ;
// import SHOP_DATA from '../../pages/shop/shop.data';
import {auth} from './../../components/firebase/firebase.utils' ;
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
const Header = ({currentUser}) =>(

    <div className='header'>
        <Link className= 'logo-container' to="/"> <Logo className='logo'>  </Logo> </Link>

        <div className='options'>
            <Link className = 'option' to='/shop'> SHOP</Link>
            <Link className = 'option' to='/'> CONTACT</Link>

            { currentUser ? <div className = 'option' onClick={() => auth.signOut()}> Sign Out</div> 
            : 
            <Link className='option' to='/signin'>Sign IN</Link>}

        </div>
    </div>
); 


export default Header ;