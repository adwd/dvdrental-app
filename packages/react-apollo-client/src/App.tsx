import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
      query DVDRentalActorPageQuery {
        totalActorsCount: actors {
          totalCount
        }
        actors(first: 5, orderBy: FIRST_NAME_ASC) {
          nodes {
            lastName
            firstName
            filmActors(first: 3, orderBy: LAST_UPDATE_ASC) {
              nodes {
                film {
                  title
                }
              }
            }
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
