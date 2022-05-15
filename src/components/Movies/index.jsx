import React, { useState } from "react";
import { Box, Button, Input, Flex, Spacer, SimpleGrid, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieBySearch } from "../../features/movieSlice";
import MovieResult from "./result";

export default function List() {
  const movie = useSelector((state) => state.movies.movie)
  // console.log(search)
  const dispatch = useDispatch()
  const [item, setItem] = useState('')

  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchMovieBySearch(item));
}

const handleChange = (event) => {
  event.preventDefault();
  setItem(event.target.value)
}

let renderResult;
renderResult = ""
renderResult = movie.Response === 'True' ? (
  movie.Search.map((movie, index) => (
          <MovieResult key={index} data={movie}/>
  ))) : (<div>{movie.Error}</div>)

  return <>
    <Box maxW="auto" mx={["2em", "4em", "5em"]} my="4em">
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input placeholder="Search Movie..." onChange={handleChange} mr="15px"/>

          <Spacer />

          <Button type="submit">Search</Button>
        </Flex>
      </form>
    </Box>
      <Heading textAlign="center" fontWeight="300" fontSize={["25px", "30px", "40px"]} mb="2em">Result for {item} </Heading>
    <Box d='flex' justifyContent="center" flexWrap="wrap" columnGap="30px" rowGap="30px" mb="3em">
      {renderResult}
    </Box>
  </>;
}
