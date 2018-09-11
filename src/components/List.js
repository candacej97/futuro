import React, { Component } from 'react';

import Item from './Item';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    createToDoItem (name, date, cat, ...args) {
        this.state.list.append(<Item name={name} date={date} categor={cat} args />);
    }

    removeToDoItem (indexToDelete) {
        this.state.list.filter( (item, index) => index !== indexToDelete )
    }

    render() {
      return this.state;
    }
  }
  
  export default List;
  