import React from "react";
import {ChildProps, Query} from "react-apollo";
import {gql} from "apollo-boost";
import Mutation from "react-apollo/Mutation";
import {Button} from "react-bootstrap";


const QUERY = gql`
  mutation { 
   createItem(name:"item_") {id}
}`;


class Comp2 extends React.Component<ChildProps<object, Response>, {}> {
    render() {
        return (
            <Mutation mutation={QUERY}>

                {
                    (result) => {
                        console.log("Mutation")
                        console.log(result)
                        // result()
                            return (
                                <div>
                                    <div>Content #2</div>
                                    <Button onClick={(event:any) => result()}>Add Item</Button>
                                </div>
                            );
                    }
                }

            </Mutation>
        );
    }
}

export default Comp2;