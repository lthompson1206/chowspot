import React, { Component } from "react";
import Button from "../Button";
import MenuButton from '../MenuButton/MenuButton.js';
import Menu from '../Menu/Menu.js';

class MenuContainer extends Component {
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
       
      <div>
               <div className="menu"><Button handleMouseDown={this.handleMouseDown}><i class="fas fa-bars"></i></Button></div>
          <MenuButton handleMouseDown={this.handleMouseDown} /> 
    <Menu handleMouseDown={this.handleMouseDown}
    menuVisibility={this.state.visible} />
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default MenuContainer;