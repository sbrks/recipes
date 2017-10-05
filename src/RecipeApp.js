import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import NavBar from './NavBar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="RecipeApp">
      <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
