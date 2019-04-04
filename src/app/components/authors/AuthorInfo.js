import React from 'react';

const AuthorInfo = (props) => {
    return (
        <div>
            <img src='http://via.placeholder.com/100' alt='Something' />
            <div>
                <h3>Name Surname</h3>
                <p>username: <b>my_cool_username</b></p>
                <p>email: <b>my_cool@email.com</b></p>
                <p>phone: <b>123154</b></p>
            </div>
        </div>
    );
}

export default AuthorInfo;