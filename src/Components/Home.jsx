import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserLoginData from './UserLoginData';
import {getAllUsers} from '../Actions/DataActions';

class Home extends Component {
    UserData;
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getAllUsers()
    }
    handleOnClick=()=>{
        this.props.history.push("/");
    }
    render() {
        debugger;
        let {fetchUserData} = this.props.state 
        return (
            <div>
                <h3>Welcome to Home Page <span style = {{color: "green"}}><b>{this.props.history.location.state.name}</b></span></h3>
                <div>
                    <button type="submit" onClick={this.handleOnClick}>logout</button>
                </div>
            {(fetchUserData && fetchUserData.users)?<UserLoginData UserData={fetchUserData.users}/>:null}
            </div>
        );
    }
}
const mapStateToProps = state =>{return{state}}
export default connect(mapStateToProps,{getAllUsers})(Home);