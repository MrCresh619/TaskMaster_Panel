import { ApolloLink, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
 registerApolloClient,
 ApolloClient,
 InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { refreshToken } from './app/(auth)/auth';

const authLink = setContext(async (_, { headers }) => {
    // Pobierz tokeny z localStorage
    let tokens = JSON.parse(localStorage.getItem('Authentication') || 'null');
    
    // Sprawdź, czy token istnieje, i czy wygasł
    if (tokens && new Date(tokens.accessTokenExpiresAt) < new Date()) {
        // Token wygasł, spróbuj odświeżyć
        const newAccessToken = await refreshToken();
        if (newAccessToken) {
            tokens = JSON.parse(localStorage.getItem('Authentication') || 'null'); // Zaktualizuj tokeny po odświeżeniu
        } else {
            // Jeśli refresh token wygasł lub jest nieprawidłowy, usuń tokeny
            localStorage.removeItem('Authentication');
            tokens = null;
        }
    }

    // Jeżeli token istnieje, dodaj go do nagłówka Authorization
    const authorizationHeader = tokens?.accessToken ? `Bearer ${tokens.accessToken}` : '';

    // Zwróć nagłówki (bez Authorization, jeśli token nie istnieje)
    return {
        headers: {
            ...headers,
            ...(authorizationHeader ? { authorization: authorizationHeader } : {}), // Dodaj Authorization tylko, gdy token istnieje
        },
    };
});


const httpLink = new HttpLink({
 // this needs to be an absolute url, as relative urls cannot be used in SSR
 uri: 'http://localhost:4000/graphql',
 // you can disable result caching here if you want to
 // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
 // fetchOptions: { cache: "no-store" },
});
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
 return new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authLink, httpLink]), 
 });
});

