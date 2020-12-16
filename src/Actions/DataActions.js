import { getUserApi } from "../Api/DataApi"

export const getUserAction = (users) =>({
    type: 'GET_USERS',
    users
})

export const getAllUsers =() => dispatch =>{
    getUserApi().then(data=>{dispatch(getUserAction(data))
    }).catch(err=>{
        console.log("Error: " +err);
    })
}