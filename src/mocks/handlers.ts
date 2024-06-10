import { graphql as executeGraphQL, buildSchema } from "graphql";
import { graphql, HttpResponse } from "msw";
import { CountryTableRow } from "../types";

const schema = buildSchema(`
  type Country {
    code: ID!
    name: String!
  }
 
  type Query {
    countries: [Country!]
  }
`);

const allCountries: CountryTableRow[] = [
  {
    code: "US",
    name: "United States",
  },
  {
    code: "CA",
    name: "Canada",
  },
];

export const handlers = [
  graphql.query("GetCountries", async ({ query, variables }) => {
    const { errors, data } = await executeGraphQL({
      schema,
      source: query,
      variableValues: variables,
      rootValue: {
        countries: allCountries,
      },
    });

    return HttpResponse.json({ errors, data });
  }),
];
