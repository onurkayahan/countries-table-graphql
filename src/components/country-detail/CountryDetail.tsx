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
import Wrapper from "./styles";

export default function CountryDetail() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  const country: Country = data.country;

  if (!country) return <Typography>No country found</Typography>;

  return (
    <Wrapper>
      <Card className="card">
        <CardHeader
          title={country.name}
          avatar={<Avatar aria-label="recipe">{country.emoji}</Avatar>}
          titleTypographyProps={{ variant: "h5" }}
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
          {country.states.length > 0 && (
            <Typography variant="body2">
              <strong>States:</strong>{" "}
              {country.states
                .map((state: { name: string }) => state.name)
                .join(", ")}
            </Typography>
          )}
        </CardContent>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={"2rem"}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/countries")}
          >
            Back to Countries
          </Button>
        </Box>
      </Card>
    </Wrapper>
  );
}
