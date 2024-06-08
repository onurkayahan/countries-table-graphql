// CountryDetail.tsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../../graphql/queries";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Button,
  Box,
  Avatar,
} from "@mui/material/";
import { Country } from "../../types";

const CountryDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  const country: Country = data.country;
  console.log(country.emoji);
  if (!country) return <Typography>No country found</Typography>;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ minWidth: 500 }}>
        <CardHeader
          title={country.name}
          avatar={<Avatar aria-label="recipe">{country.emoji}</Avatar>}
        />
        <CardContent>
          <Typography variant="body2">
            <strong>Code:</strong> {country.code}
          </Typography>
          <Typography variant="body2">
            <strong>Native:</strong> {country.native}
          </Typography>
          <Typography variant="body2">
            <strong>Phone:</strong> {country.phone}
          </Typography>
          <Typography variant="body2">
            <strong>Continent:</strong> {country.continent.name}
          </Typography>
          <Typography variant="body2">
            <strong>Capital:</strong> {country.capital}
          </Typography>
          <Typography variant="body2">
            <strong>Currency:</strong> {country.currency}
          </Typography>
          <Typography variant="body2">
            <strong>Languages:</strong>{" "}
            {country.languages
              .map((lang: { name: string }) => lang.name)
              .join(", ")}
          </Typography>
          <Typography variant="body2">
            <strong>States:</strong>{" "}
            {country.states
              .map((state: { name: string }) => state.name)
              .join(", ")}
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/countries")}
            >
              Back to Countries
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryDetail;
