import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>
);
