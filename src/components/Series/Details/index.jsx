import React from "react";
import { Box, Heading, Text, Image, Flex, Spacer } from "@chakra-ui/react";

export default function SeriesDetails({ detail }) {
  return (
    <Flex direction={'column'} margin="2em" alignItems="center">
      <Heading as="h6" fontSize="2em" mb="1em">
        {detail.Title}
      </Heading>
    <Box margin="2em 4em">
      <Image src={detail.Poster} alt="detail" objectFit="contain" />
    </Box>
        <Spacer />
      <Box fontWeight="500" fontSize={{base: '0.9em', md: '2em', lg: '1.1em'}}>
      <Text>Rated: {detail.Rated}</Text>
      <Text>Director: {detail.Director}</Text>
      <Text>Plot: {detail.Plot}</Text>
      <Text>Runtime: {detail.Runtime}</Text>
      <Text>Ratings: {detail.ratings}</Text>
      <Text>Country: {detail.Country}</Text>
      <Text>Genres: {detail.Genre}</Text>
      <Text>Released Date: {detail.Released}</Text>
      <Text>Writer: {detail.Writer}</Text>
      <Text>Box Office: {detail.BoxOffice}</Text>
      <Text>Award: {detail.Awards}</Text>
      <Text>Season: {detail.totalSeasons}</Text>
    </Box>
    </Flex>
  );
}