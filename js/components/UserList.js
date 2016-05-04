import React from 'react';



function UserList (props) {
    return <pre> {JSON.stringify(props.getData(), 2, '  ')} </pre>
}

export default UserList;