import React from "react";
import {ChildProps } from "react-apollo";
import {gql} from "apollo-boost";
import { Query } from "react-apollo";

const QUERY = gql`
  {
    getItem {
    id
    name
  }}
`;
//
// const withComp1 = graphql<InputProps, Response>(QUERY,{props: ({ data, ownProps }) => ({
//         ...data})});

type Data = {
    getAusruestungsStuecke: [
        {id:string
        name:string}
        ]
};

type Variables = {

};

class Comp1 extends React.Component {
    render(){
        return (
            <Query<Data> query={QUERY}>

                {
                    ({loading,error,data}) => {
                if (loading) return "Loading...";
                if (error) return `Error!`;

                if(data)
                        return (
                    <div>
                        <div>Content #1</div>
                        <ul>
                        {
                            data.getAusruestungsStuecke.map(item => <li>{ item.id } - { item.name }</li>)
                        }
                        </ul>
                    </div>
                );
            }}

    </Query>
    );
    }
}

export default Comp1;