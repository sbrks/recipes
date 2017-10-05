import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';


class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of spaghetti sauce. Bring water to boil",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "spaghetti.jpg"
      },

      {
        title: "Coffee",
        instructions: "Boil water, grind coffee beans, pour water over coffee beans, filter",
        ingredients: ["Coffee beans", "Water"],
        img: "coffee.jpg"

      },

      {
        title: "Omelette",
        instructions: "Cut vegetables, stir fry vegetables with oil, scramble eggs, add eggs and cheese, cook until eggs harden, flip into omelette shape",
        ingredients: ["Eggs", "Vegetables", "Cheese"],
        img: "omelette.jpg"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index}{...r} />
    ));

    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList;
