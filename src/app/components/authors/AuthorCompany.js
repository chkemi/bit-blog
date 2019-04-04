import React from 'react';

const AuthorCompany = (props) => {
    return (
        <>
            <h2>Company</h2>
            <div>
                <p>Name: <b>{props.info.companyName}</b></p>
                <p>Slogan: <b>{props.info.companySlogan}</b></p>
            </div>
        </>
    );
}

export default AuthorCompany;