import React from 'react';

const AuthorInfo = (props) => {
    return (
        <>
            <div className='clearfix mt-5'>
                <img className='float-left' src='http://via.placeholder.com/150' alt='Something' />
                <div className='float-left ml-5'>
                    <h3>Name Surname</h3>
                    <p>username: <b>my_cool_username</b></p>
                    <p>email: <b>my_cool@email.com</b></p>
                    <p>phone: <b>123154</b></p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default AuthorInfo;