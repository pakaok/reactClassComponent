import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount(){
    console.log('User unmounted')
  }
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
// };s

export default User;
