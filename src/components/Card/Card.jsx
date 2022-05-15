import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

export default function CardList({ movie }) {
  // const title = movie.Title.split(" ").join("-");
  return (
    <Box w={["60%", "80%"]}>
      <Link to={`${movie.Title}/${movie.imdbID}`}>
        <Image src={movie.Poster} alt="movie-banner" w={["60%", "80%"]} />
        <Box display="flex" mx="5em" alignmovies="center" mt={2}>
          <StarIcon color="gold" />
          <Text ml={[2, null, 0]}>{movie.imdbRating}</Text>
        </Box>
      </Link>
    </Box>
  );
}

export function PreloadedImage() {
  return (
    <Box
      maxWidth={["25%", "25%"]}
      maxHeight={["60%", "80%"]}
      padding="4.5em"
      bgColor="gray.300"
    ></Box>
  );
}
