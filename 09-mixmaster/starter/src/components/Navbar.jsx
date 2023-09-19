import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../assets/wrappers/Navbar';

const StyleBtn = styled.button`
	background: red;
	color: white;
	font-size: 2rem;
	padding: 1rem;
`;

const Navbar = () => {
	return (
		<Wrapper>
			<nav>
				<div className="nav-center">
					{/* <StyleBtn>styled button</StyleBtn> */}
					<span className="logo">MixMaster</span>
					<div className="nav-links">
						{/** An 'active' class will be added when the link is selected */}
						<NavLink to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/about" className="nav-link">
							About
						</NavLink>
						<NavLink to="/newsletter" className="nav-link">
							Newsletter
						</NavLink>
					</div>
				</div>
			</nav>
		</Wrapper>
	);
};

export default Navbar;
