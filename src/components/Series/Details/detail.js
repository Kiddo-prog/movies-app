import React, {useEffect} from 'react'
import { fetchMovieByTitleID } from '../../../features/movieSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SeriesDetails from './'

export default function SeriesDetail() {
  const detail = useSelector((state) => state.movies.id)
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    dispatch(fetchMovieByTitleID(params.title))
  }, [dispatch, params.title])
  
  return (
    <>
    <SeriesDetails detail={detail}/>
    </>
  )
}

