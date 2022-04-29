import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Menu() {
  const linkStyle = {
    marginLeft: "1em",
    fontWeight: 500,
    fontSize: { base: "1em", md: "2em", lg: "3em" },
  };
  return (
    <>
      <Box p={5} bgColor="#000" color="#fff">
        <Flex alignItems="center">
          <Box>
            <Heading
              as="h2"
              fontSize={["17", "20", "25", "28"]}
              fontWeight={400}
            >
              <Link to="/">M Movies</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Link to="/category/movies" style={linkStyle}>
              Movies
            </Link>
            <Link to="/category/series" style={linkStyle}>
              Tv Series
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
