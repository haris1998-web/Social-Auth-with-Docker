import {gql} from "@apollo/client";

const LOGIN_QUERY = gql`
    mutation login($email: String! $password: String!){
            comLogin(email: $email password:$password){
                token
                success
                message
            }
       }
`;

export default LOGIN_QUERY;