import React from "react";
import { Box, Heading, Text, Image, List, ListItem } from "@chakra-ui/react";

export default function Details({ detail }) {
  return (
    <Box margin="2em 4em">
      <Image src={detail.image} alt="detail" />
      <Heading as="h6" textAlign="center">
        {detail.titleOriginal}
      </Heading>
      <Text>{detail.description}</Text>
      <p>{detail.ratings}</p>
      <List>
        {detail.genres.map((item) => (
          <ListItem display="inline">{item.name}</ListItem>
        ))}
      </List>
      <Text>Released Date: {detail.release}</Text>
      <Text>{detail.ratings}</Text>
    </Box>
  );
}
