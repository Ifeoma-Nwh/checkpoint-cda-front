import { gql } from "@apollo/client";

export const getContinents = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export const getCountries = gql`
  query {
    countries {
      code
      name
      capital
      currency
      emoji
    }
  }
`;
