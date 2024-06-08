import { action, makeAutoObservable, toJS } from "mobx";
import client from "../graphql/apolloClient";
import { GET_COUNTRIES } from "../graphql/queries";
import { Country } from "../types";

class CountriesStore {
  countries: Country[] = [];
  loading: boolean = true;
  error: Error | null = null;

  constructor() {
    makeAutoObservable(this, {
      setCountries: action,
    });
  }

  async fetchCountries() {
    this.loading = true;
    this.error = null;
    try {
      const response = await client.query({
        query: GET_COUNTRIES,
      });

      this.setCountries(toJS(response.data.countries));
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.error = error;
      } else {
        this.error = new Error("An unknown error occurred");
      }
    } finally {
      this.loading = false;
    }
  }
  setCountries(countries: Country[]) {
    this.countries = countries;
  }
}

const countriesStore = new CountriesStore();
export default countriesStore;
