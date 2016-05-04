import React from 'react';
import UserData from './UserData';




function UserList (props) {
    var list = props.getData().map( elem => {
                return (
                    <UserData 
                        key={elem.id} 
                        name={elem.name} 
                        age={elem.age} 
                        phone={elem.phone} 
                        image={elem.image} 
                    />)
            } )
    return (
        <div>
            {list}
        </div>
        )
}

export default UserList;