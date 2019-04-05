import React from 'react';

const AuthorAddress = (props) => {
    if (!props.info) {
        return <h1>Loading..</h1>
    } else {
        return (
            <>
                <div className='clearfix'>
                    <div className='float-left'>
                        <h2>Address</h2>
                        <p>Street: <b>{props.info.street}</b></p>
                        <p>City: <b>{props.info.city}</b></p>
                        <p>Zipcode: <b>{props.info.zipCode}</b></p>
                    </div>
                    <iframe className='float-right' src={`https://maps.google.com/maps?q=${props.info.lat},${props.info.lng}&hl=es;z=14&amp;&output=embed`}></iframe>
                </div>
                <hr />
            </>
        );
    }
}

export default AuthorAddress;