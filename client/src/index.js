import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from "./App";
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

const EXCHANGE_RATES = gql`
    {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>My first Apollo app</h2>
        </div>
        <ExchangeRates />
    </ApolloProvider>
);

ReactDOM.render(
    <React.StrictMode>
        <ApolloApp />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
