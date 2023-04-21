import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {

return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/MyDashboard' activeStyle>
            My Dashboard
		</NavLink>
		<NavLink to='/events' activeStyle>
            Member offers
		</NavLink>
		<NavLink to='/annual' activeStyle>
            Order history
		</NavLink>
		<NavLink to='/team' activeStyle>
            Account details
		</NavLink>
		<NavLink to='/blogs' activeStyle>
            Address book
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
            Subscriptions
		</NavLink>
        <NavLink to='/blogs' activeStyle>
            Memberships history
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
            Verify Entry Numbers
		</NavLink>
		<NavLink to='/' activeStyle>
            Back
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
