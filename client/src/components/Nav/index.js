// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from "../Button";
import React, {Component} from "react";
import "./style.css";
import MenuButton from '../MenuButton/MenuButton.js';
import Menu from '../Menu/Menu.js';
import Input from '../Input/index.js';

class Nav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false
    };
   
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
   
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
    render() {
      return (
     
        <nav className="navbar navbar-dark bg-dark">
          {/* <Navbar sticky="top" /> */}
          {/* https://github.com/negomi/react-burger-menu */}
          {/* http://negomi.github.io/react-burger-menu/ */}
          <MenuButton handleMouseDown={this.handleMouseDown} ><i class="fas fa-bars"></i></MenuButton> 
          <Menu handleMouseDown={this.handleMouseDown}
    menuVisibility={this.state.visible} />
          
           <div>
           <a className="navbar-brand" href="/">
            Chow$pot
          </a>
           </div>
         <div className="search"><Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      /></div>
       <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
        </nav>
      );
    }
    }
    
    



export default Nav;
