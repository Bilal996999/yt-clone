import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos, direction }) => {

  return (
    <Stack
      direction={direction || "row"}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index} sx={{ width: { xs: '100%', sm: '290px' } }}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos