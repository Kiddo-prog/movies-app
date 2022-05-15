import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../MovieList";
import Details from "./Details.jsx";
import { useSelector } from "react-redux";

function MovieDetails() {
  const detail = useSelector((state) => state.movies.items)
  return (
    <Box>
        <Box>
          <Details detail={detail} />
        </Box>
    </Box>
  );
}

export default MovieDetails;
