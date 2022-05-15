import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList, { PreloadedImage } from "./Card/Card";
import { Flex, Spinner, Grid, GridItem, Heading } from "@chakra-ui/react";
import { fetchMovieByTitle } from "../features/movieSlice";

export default function Movies() {
  const [loading, setLoading] = useState(true)
  const movies = useSelector((state) => state.movies.items)
  console.log(movies)
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchMovieByTitle(['batwoman']))
    setLoading(false)
  },[dispatch])

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
          <GridItem>

          {movies && (
            <CardList movie={movies} key={movies.imdbID}/>
            )}
          </GridItem>
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
