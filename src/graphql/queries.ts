import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;
// queries.ts

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      emoji
      emojiU
      awsRegion
      currencies
      continent {
        name
      }
      capital
      currency
      languages {
        code
        name
      }
      states {
        code
        name
      }
    }
  }
`;
