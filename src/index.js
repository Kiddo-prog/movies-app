import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./app/store";

import MovieDetails from "./components/Details/MovieDetails.jsx";
import Menu from "./components/Header.jsx";
import Series from "./components/Series";
import List from "./components/Movies";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path=":title/:id" element={<MovieDetails />} />
            <Route path="category/movies" element={<List />} />
            <Route path="category/series" element={<Series />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
