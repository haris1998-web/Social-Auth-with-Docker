import {React} from 'react';

function FacebookOAuthButton(){
    const handleClick = () => {
        const facebookAuthUrl = 'https://www.facebook.com/v16.0/dialog/oauth';
        const redirectUri = 'v2/social/facebook';

        const scope = ['public_profile'].join(',');

        const params = {
            response_type: 'code',
            client_id: '689533386302551',
            redirect_uri: `http://localhost:8000/${redirectUri}`,
            scope
          };

        const urlParams = new URLSearchParams(params).toString();
        window.location = `${facebookAuthUrl}?${urlParams}`;
    }

    return (
        <button onClick={handleClick} className="w-full rounded-xl">
            Facebook
        </button>
    )
}

export default FacebookOAuthButton;