import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'


const Menu = styled.nav`
    margin: .5rem 0 0 0;
    display: flex;
`

export default function TabNav() {
    return (
        <Menu>
            <NavLink className='navlink' activeClassName='active' to='/' exact >
                Home
            </NavLink>
            <NavLink className='navlink' activeClassName='active' to='/characters' >
                Characters
            </NavLink>
            <NavLink className='navlink' activeClassName='active' to='/locations' >
                Locations
            </NavLink>
            <NavLink className='navlink' activeClassName='active' to='/episodes_list' >
                Episodes
            </NavLink>
        </Menu>
    )   
};
