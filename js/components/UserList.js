import React from 'react';
import UserData from './UserData';
import FlipMove from 'react-flip-move';



function UserList (props) {
    var list = props.getData().map( elem => {
                return (
                    <UserData 
                        key={elem.id} 
                        name={elem.name} 
                        age={elem.age} 
                        phone={elem.phone} 
                        image={elem.image} 
                        onSelectUser={ e => {e.preventDefault(); props.onSelectUser(elem.id) } } 
                    />)
            } )
    return (
        <FlipMove easing="ease-out" duration={1000} >
                    {list}
        </FlipMove>
        )
}

UserList.propTypes = {
    onSelectUser: React.PropTypes.func.isRequired,
}

export default UserList;