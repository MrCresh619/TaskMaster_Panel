export const authUser = (tokens: {
    access_token: string,
    refresh_token: string,
    access_token_expires_at: string,
    refresh_token_expires_at: string}) => {
    localStorage.setItem('Authenticate', JSON.stringify({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
        accessTokenExpiresAt: tokens.access_token_expires_at,
        refreshTokenExpiresAt: tokens.refresh_token_expires_at
    }))
}

export const logout = () => {
    localStorage.removeItem('Authenticate')
}

export const refreshToken = async () => {
    const tokens = JSON.parse(localStorage.getItem('Authentication') || 'null');
    if (!tokens || !tokens.refreshToken) return null;

    try {
        const response = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.refreshToken}`, // Użyj refresh token do odświeżenia
            },
            body: JSON.stringify({
                query: `
                    mutation RefreshToken($token: String!) {
                        refreshToken(token: $token) {
                            access_token
                            access_token_expires_at
                            refresh_token
                            refresh_token_expires_at
                        }
                    }
                `,
                variables: {
                    token: tokens.refreshToken
                }
            }),
        });

        const data = await response.json();
        if (data && data.data && data.data.refreshToken) {
            authUser(data.data.refreshToken);
            return data.data.refreshToken.access_token;
        }
    } catch (error) {
        console.error('Failed to refresh token', error);
        return null;
    }
};


export const registerUser = () => {
    
}