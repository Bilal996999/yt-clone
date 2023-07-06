import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{
      flexDirection: {
        xs: 'column', md: 'row'
      }
    }}>

      <Box sx={{
        height: {
          sx: '92vh', md: 'auto'
        },
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2 },
        flex: '1 1 12%'
      }}>

        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className='copyright'
          variant='body2'
          sx={{ mt: 3.5, color: '#fff' }}>
          Copyright 2023 Bilal Idrees
        </Typography>

      </Box>

      <Box p={2} sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: '1 1 88%',
      }}>
        <Typography
          variant='h4'
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}>

          {selectedCategory}

          <span
            style={{ color: '#f31503', marginLeft: '10px' }}>
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed