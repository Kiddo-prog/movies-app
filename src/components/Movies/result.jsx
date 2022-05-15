import React from 'react';
import { Text, Image, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function MovieResult({data}){
    return(
        <>
        <Box>
        <Link to={`${data.Title}`}>
            <Image src={data.Poster} alt="movie-poster" boxSize="200px" objectFit="cover"/>
            </Link>
        </Box>
        </>
    )
}


