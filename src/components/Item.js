import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            date: this.props.date,
            category: this.props.category,
            description: this.props.description
        }
    }

    render() {
      return this.state;
    }
  }

  Item.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
  }
  
  export default Item;
  