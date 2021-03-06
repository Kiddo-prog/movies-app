import React, {useEffect} from 'react'
import { fetchMovieByTitleID } from '../../../features/movieSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SeriesDetails from './'
import { Box } from "@chakra-ui/react"

export default function SeriesDetail() {
  const detail = useSelector((state) => state.movies.id)
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    dispatch(fetchMovieByTitleID(params.title))
  }, [dispatch, params.title])
  
  return (
    <>
    <Box mx="20px">
      <SeriesDetails detail={detail}/>
    </Box>
    </>
  )
}

