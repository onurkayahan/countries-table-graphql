import { render, screen } from "@testing-library/react";
import CountriesTable from "../../src/components/countries/countries-table/CountriesTable";
import { MemoryRouter } from "react-router-dom";

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  // Add more sample countries as needed
];

describe("renders countries table", () => {
  it("should render given countries in the table with corresponding country detail page links on country name", () => {
    // MemoryRouter needed since using of Link. That component needs to appear inside a router, but in your tests it is not.
    const { getByText } = render(
      <MemoryRouter>
        <CountriesTable countries={countries} />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
    countries.forEach((country, index) => {
      expect(links[index]).toHaveAttribute("href", `/country/${country.code}`);
    });

    const linkElement = getByText(/United States/i);
    expect(linkElement).toBeInTheDocument();
  });
});
