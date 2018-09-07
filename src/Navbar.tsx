import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
    </nav>
);


export default Navbar;