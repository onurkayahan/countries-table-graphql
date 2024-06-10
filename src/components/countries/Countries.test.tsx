// src/components/Countries/Countries.test.tsx
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Countries from "./Countries";
import countriesStore from "../../stores/countriesStore";
import { Provider } from "mobx-react";
import { MockedProvider } from "@apollo/client/testing";

function MockCountries() {
  return (
    <MockedProvider>
      <Provider countriesStore={countriesStore}>
        <Countries />
      </Provider>
    </MockedProvider>
  );
}

describe("renders Countries component", () => {
  it("should show progressbar initially and while fetching", async () => {
    render(<MockCountries />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
  it("should fetches countries and render them", async () => {
    render(<MockCountries />);

    await waitFor(() =>
      expect(screen.getByText("Countries Table")).toBeInTheDocument()
    );

    expect(await screen.findByText("United States")).toBeInTheDocument();
    expect(await screen.findByText("Canada")).toBeInTheDocument();
  });

  it("should handle search functionality for find with country code", async () => {
    render(<MockCountries />);

    await waitFor(() =>
      expect(screen.getByText("Countries Table")).toBeInTheDocument()
    );

    const searchContainer = screen.getByTestId("search-countries");
    const searchInput = searchContainer.querySelector("input");

    fireEvent.change(searchInput!, { target: { value: "US" } });

    expect(screen.queryByText("United States")).toBeInTheDocument();
    expect(screen.queryByText("Canada")).not.toBeInTheDocument();
  });
});
