import React from "react";
import { Box, Heading, Text, Image, Flex, Spacer } from "@chakra-ui/react";

export default function Details({ detail }) {
  return (
    <Flex direction={{base: 'column-reverse', md:"row-reverse", lg: 'row-reverse'}} margin="2em" alignItems="flex-start">
    <Box margin="2em 4em">
      <Image src={detail.Poster} alt="detail" objectFit="contain" boxSize={{lg: '500px'}}/>
    </Box>
        <Spacer />
      <Box fontWeight="500" fontSize={{base: '0.5em', md: '2em', lg: '0.9em' }}>
      <Heading as="h6" fontSize="2em" mb="1em">
        {detail.Title}
      </Heading>
      <Text>Rated: {detail.Rated}</Text>
      <Text>Director: {detail.Director}</Text>
      <Text>{detail.Plot}</Text>
      <Text>Runtime: {detail.Runtime}</Text>
      <Text>Ratings: {detail.ratings}</Text>
      <Text>Genres: {detail.Genre}</Text>
      <Text>Released Date: {detail.Released}</Text>
      <Text>Writer: {detail.Writer}</Text>
      <Text>Box Office: {detail.BoxOffice}</Text>
      <Text>Award: {detail.Awards}</Text>
    </Box>
    </Flex>
  );
}