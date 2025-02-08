import React from 'react';

type Props = {
    params: {
        userId: string
    }
}

const UserDetails = ({params: {userId}}: Props) => {
    return (
        <div>
            <h1>User Details {userId}</h1>
        </div>
    );
};

export default UserDetails;