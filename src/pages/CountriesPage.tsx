import React from "react";
import Countries from "../components/countries/Countries";
import Layout from "../components/layout/Layout";

const CountriesPage: React.FC = () => {
  return (
    <Layout>
      <Countries />
    </Layout>
  );
};

export default CountriesPage;
