import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";
import { GET_COUNTRY_BY_CODE } from "../../graphql/queries";
import CountryDetail from "./CountryDetail";
import { Country } from "../../types";

const mockCountry: Country = {
  code: "US",
  name: "United States",
  native: "United States",
  phone: "1",
  continent: {
    name: "North America",
    code: "",
    countries: [],
  },
  capital: "Washington, D.C.",
  currency: "USD",
  languages: [
    {
      name: "English",
      code: "",
      native: "",
      rtl: false,
    },
  ],
  awsRegion: "",
  currencies: [],
  emoji: "",
  emojiU: "",
  states: [],
};

const mocks = [
  {
    request: {
      query: GET_COUNTRY_BY_CODE,
      variables: { code: "US" },
    },
    result: {
      data: {
        country: mockCountry,
      },
    },
  },
];

describe("CountryDetail", () => {
  it("renders loading state initially", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/country/US"]}>
          <Routes>
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders country detail correctly", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries={["/country/US"]}>
          <Routes>
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("US")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("North America")).toBeInTheDocument();
      expect(screen.getByText("Washington, D.C.")).toBeInTheDocument();
      expect(screen.getByText("USD")).toBeInTheDocument();
      expect(screen.getByText("English")).toBeInTheDocument();
    });
  });
});
