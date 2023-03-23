import React from 'react';

const { REACT_APP_BASE_BACKEND_URL } = process.env;

function MicrosoftOAuthButton() {
    const handleClick = () => {
        const microsoftAuthUrl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize';
        const redirectUri = 'v2/social/microsoft';

        const scope = [
            'openid',
            'https://graph.microsoft.com/user.read'
        ].join(' ');

        const params = {
            response_type: 'code',
            client_id: 'ed1c91aa-24ef-45c8-9090-a325381c2183',
            redirect_uri: `http://localhost:8000/${redirectUri}`,
            prompt: 'select_account',
            response_mode: 'query',
            scope
        };

        const urlParams = new URLSearchParams(params).toString();
        window.location = `${microsoftAuthUrl}?${urlParams}`;
    }

    return (
        <button onClick={handleClick} className="w-full rounded-xl">
            <p>Microsoft</p>
        </button>
    )
}

export default MicrosoftOAuthButton;