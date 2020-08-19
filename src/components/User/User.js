import React,{useContext} from 'react'
import { DataContext } from '../../context/DataContext';


function User() {
    const {state} = useContext(DataContext);
    const { user} = state


   
 console.log(user);
    return (
        <div>
            <h1>hello {user?.display_name}</h1>  {/* optional chaining */}
            {/* <h1>hello {user && user.display_name}</h1> */}
        </div>
    )
}

export default User
