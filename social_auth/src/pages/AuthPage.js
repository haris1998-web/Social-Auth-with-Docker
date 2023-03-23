import React from 'react';
import { useSearchParams } from 'react-router-dom';

function AuthPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('token'));
    
    return (
        <div>
            <h1>
                This is {searchParams.get('token')}
            </h1>
        </div>
    )
}

export default AuthPage;