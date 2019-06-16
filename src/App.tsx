import React from 'react';

import './App.css';
import { ChildProps } from "react-apollo";
import Comp1 from "./components/Comp1/Comp1";
import Comp2 from "./components/Comp2/Comp2";
import ApolloProvider from "react-apollo/ApolloProvider";
import ApolloClient from 'apollo-boost';

class App extends React.Component<ChildProps<object, Response>, {}> {


  render() {
      const client = new ApolloClient({
          uri: "http://localhost:3000/graphql"});
    return (
        <ApolloProvider client={client}>
        <div>
          <h1>Components</h1>
          <div>
            <h2>#1</h2>
            <Comp1/>
          </div>
          <div>
            <h2>#2</h2>
            <Comp2></Comp2>
          </div>
        </div>
        </ApolloProvider>
    );
  }
}


export default App;
