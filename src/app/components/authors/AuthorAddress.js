import React from 'react';

const AuthorAdress = (props) => {
    return (
        <>
            <div className='clearfix'>
                <div className='float-left'>
                    <h2>Adress</h2>
                    <p>street: <b>Bla Bla St</b></p>
                    <p>city: <b>Bla Bla city</b></p>
                    <p>zipcode: <b>12312</b></p>
                </div>
                <iframe className='float-right'>whoho</iframe>
            </div>
            <hr />
        </>
    );
}

export default AuthorAdress;