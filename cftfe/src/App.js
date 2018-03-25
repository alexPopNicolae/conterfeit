import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftSideBar from './features/LeftSideBar';
import MainContent from './features/MainContent';
import LoadingScreen from './common/LoadingScreen';
import { connect } from 'react-redux';

class App extends Component {
 constructor() {
   super();
 } 

  render() {

    let visible = this.props.activeLoadingScreen;

    return (
      <div className="App">
      <LeftSideBar/>
      <MainContent />
      {visible ?  <LoadingScreen/> :null}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeLoadingScreen:state.activeLoadingScreen > 0
  }
}

function mapDispatchToProps(dispatch) {
  return{};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
