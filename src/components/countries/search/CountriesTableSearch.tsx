import { TextField } from "@mui/material";
import React from "react";
import Wrapper from "../styles";

interface Props {
  searchTerm: string;
  handleSearch: (value: string) => void;
}

export default function CountriesTableSearch({
  searchTerm,
  handleSearch,
}: Props) {
  return (
    <Wrapper>
      <TextField
        label="Search Countries"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSearch(event.target.value);
        }}
      />
    </Wrapper>
  );
}
