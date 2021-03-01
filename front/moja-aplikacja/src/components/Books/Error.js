import React from 'react';

export default function ErrorComponent({errorCode, errorMessage}) {
    return(
        <>
        <div>{errorCode}</div>
        <div>{errorMessage}</div>
        </>
    )
}