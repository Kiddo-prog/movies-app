import React from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export default function SeriesResult({data}){
    return(
        <>
        <Box>
            <Link to={`${data.Title}`}>
                <Image src={data.Poster} alt="movie-poster" boxSize="200px" objectFit="cover"/>
                <Text fontSize="1em" fontWeight="600" textAlign="center" mt="1em">{data.Title}</Text>
            </Link>
        </Box>
        </>
    )
}


