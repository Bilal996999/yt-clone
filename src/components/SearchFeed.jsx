import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const {searchTerm} = useParams()
  console.log(searchTerm)
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm])

  return (
    <Box p={2} sx={{
      overflowY:'auto', 
      height:'90vh',
      flex:2,
      }}>
      <Typography 
        variant='h4' 
        fontWeight="bold" 
        mb={2} 
        sx={{color:'#fff'}}>

          Search Results for: {searchTerm}
        
        <span 
          style={{color: '#f31503',marginLeft:'10px'}}>
            Videos
        </span>
      </Typography>

      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed