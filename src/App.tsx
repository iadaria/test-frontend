import { gql, useQuery } from '@apollo/client';
import './App.css';
import { GetBalanceQuery, GetBalanceQueryVariables } from './generated/graphql';

const GET_BALANCE = gql`
  query getBalance ($input: GetBalanceInput!) {
    getBalance(input: $input) {
      ok
      error
      balance {
        fund
        sum
      }
    }
  }
`;


function App() {

 const { data, loading, error } = useQuery<GetBalanceQuery, GetBalanceQueryVariables>(GET_BALANCE, {
   variables: { input: { id: 146 }},
   pollInterval: 5000,
 })

 if (loading) return <p>Loading ...</p>

  return (
    <div className="App">
      <header className="App-header">
        <p>Balance:</p>
        {data?.getBalance.balance.map(({ fund, sum }) => <div key={fund}>fund: {fund}: {sum}</div>)}
      </header>
    </div>
  );
}

export default App;
