import React from 'react';

const AuthorAddress = (props) => {

    return (
        <>
            <div className='clearfix'>
                <div className='float-left'>
                    <h2>Adress</h2>
                    <p>Street: <b>{props.info.street}</b></p>
                    <p>City: <b>{props.info.city}</b></p>
                    <p>Zipcode: <b>{props.info.zipCode}</b></p>
                </div>
                <iframe className='float-right'>whoho</iframe>
            </div>
            <hr />
        </>
    );
}

export default AuthorAddress;