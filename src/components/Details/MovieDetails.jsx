import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useParams, Link } from "react-router-dom";
import { Loading } from "../MovieList";
import { fetchApi } from "../../lib/api";
import Details from "./Details.jsx";

function MovieDetails() {
  const params = useParams();
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovieDetail = async () => {
    const response = await fetchApi(`movie/${params.id}`);
    setDetail(response.result);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  });

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Details detail={detail} />
        </Box>
      )}
    </Box>
  );
}

export default MovieDetails;
