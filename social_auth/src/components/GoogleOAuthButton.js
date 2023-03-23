import React from 'react';

function GoogleOAuthButton() {
    const handleClick = () => {
        const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
        const redirectUri = 'v2/social/google';

        const scope = [
            'https://www.googleapis.com/auth/userinfo.email',
            'https://www.googleapis.com/auth/userinfo.profile'
        ].join(' ');

        const params = {
            response_type: 'code',
            client_id: '1060566274735-7c5vmbb6s9ft4cjgc3o8bs6tujcua75h.apps.googleusercontent.com',
            redirect_uri: `http://localhost:8000/${redirectUri}`,
            prompt: 'select_account',
            access_type: 'offline',
            scope
        };

        const urlParams = new URLSearchParams(params).toString();
        window.location = `${googleAuthUrl}?${urlParams}`;
    }

    return (
        <button onClick={handleClick} className="w-full rounded-xl">
            Google
        </button>
    )
}

export default GoogleOAuthButton;