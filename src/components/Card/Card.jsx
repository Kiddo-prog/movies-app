import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

export default function CardList({ item }) {
  const title = item.title.split(" ").join("-");
  return (
    <Box w={["60%", "80%"]}>
      <Link to={`${title}/${item._id}`} key={item.title}>
        <Image src={item.image} alt="movie-banner" w={["60%", "80%"]} />
        <Box display="flex" mx="5em" alignItems="center" mt={2}>
          <StarIcon color="gold" />
          <Text ml={[2, null, 0]}>{item.rating}</Text>
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
