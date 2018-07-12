import React from 'react';
import { connect } from 'react-redux';

 const Counter = (props) => (
    <h2>Quantidade de To Do: {props.todos.length} </h2>
 );

 const mapStateToProps = state => ({
     todos: state.todos,
 });
 
 export default connect(mapStateToProps)(Counter);
