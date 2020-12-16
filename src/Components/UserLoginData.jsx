import React, { useState } from 'react';
import Model from './Model';

const UserLoginData = (props) => {
    const [modal,setModal]=useState(false);
    const[userData,setUserData]=useState();
    const openModal=(userprofile)=>{
        setModal(true);
        setUserData(userprofile);
    } 
    return (
        <div >
            <table className="user">
                <TableHeader />
                {
                    props.UserData.map(user => {
                        return <TableData userProfile={user} openModal={openModal}/>
                    })
                }
            </table>
            <Model hide={modal} close={()=>setModal(false)} userdata={userData}/>
        </div>
    );
};

const TableHeader = () => {
    return (
        <tr>
            <th>_id</th>
            <th>First-Name</th>
            <th>Last-Name</th>
            <th>Role-Name</th>
            <th>Active</th>
        </tr>)
}

const TableData = (props) => {
    
    return (<tr>
        <td>{props.userProfile._id}</td>
        <td>{props.userProfile.firstName}</td>
        <td>{props.userProfile.lastName}</td>
        <td>{props.userProfile.role}</td>
        <td><input type="checkbox" checked={props.userProfile.isActive}/></td>
        <td><button onClick={()=>{props.openModal(props.userProfile)}}>get details</button></td>
    </tr>)
}

export default UserLoginData;