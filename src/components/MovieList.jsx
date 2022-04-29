import React, { useState, useEffect } from "react";
import CardList, { PreloadedImage } from "./Card/Card";
import { Flex, Spinner, Grid, GridItem, Heading } from "@chakra-ui/react";
import { fetchApi } from "../lib/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAllMovies = async () => {
    const response = await fetchApi(
      "movies?sort=title&type=movies&year=2021&genres=accion"
    );
    setMovies(response.results);
    setLoading(false);
  };
  useEffect(() => {
    // window.addEventListener("load", getInitialPageLoad());
    getAllMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          placeItems="center"
          justifyItems="center"
          gap={6}
          mt={5}
          mx={["5em", null, "1em"]}
        >
          {movies &&
            movies.slice(0, 10).map((item) => (
              <GridItem padding="auto">
                <CardList key={item._id} item={item} />
              </GridItem>
            ))}
        </Grid>
      )}
    </>
  );
}

export function Loading() {
  return (
    <>
      <Flex justify="center" mt="5em" fontSize={["1em", "2em", "2.5em", "3em"]}>
        <Spinner
          thickness="4px"
          color="blue"
          emptyColor="gray.400"
          speed="0.5s"
          size="xl"
        />
      </Flex>
    </>
  );
}

// export function getInitialPageLoad() {
//   setTimeout(() => {
//     console.log("Welcome to movie site");
//   }, 5000);
// }
