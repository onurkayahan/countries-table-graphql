import React from "react";
import CountryDetail from "../components/country-detail/CountryDetail";
import Layout from "../components/layout/Layout";

const CountryDetailsPage: React.FC = () => {
  return (
    <Layout>
      <CountryDetail />
    </Layout>
  );
};

export default CountryDetailsPage;
