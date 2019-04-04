import React from 'react';

const AuthorInfo = (props) => {
    return (
        <>
            <div className='clearfix mt-5'>
                <img className='float-left' src='http://via.placeholder.com/150' alt='Something' />
                <div className='float-left ml-5'>
                    <h3>{props.info.name}</h3>
                    <p>Username: <b>{props.info.username}</b></p>
                    <p>Email: <b>{props.info.email}</b></p>
                    <p>Phone: <b>{props.info.phone}</b></p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default AuthorInfo;