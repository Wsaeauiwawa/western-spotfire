import React from "react";
import {Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink} from './NavbarElement';
  import { BsFillPieChartFill } from "react-icons/bs";
  import { BsFillBarChartFill } from "react-icons/bs";
  import { FcScatterPlot } from "react-icons/fc";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Spotfire</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Bar chart" activeStyle>
            <BsFillBarChartFill />Bar chart
          </NavLink>
           <NavLink to="/Pie chart" activeStyle>
            <BsFillPieChartFill />Pie Chart
          </NavLink>
           <NavLink to="/Scatter plot" activeStyle>
            <FcScatterPlot />Scatter plot
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
