import {Box, CardContent,CardMedia, Typography, Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channel}) => {
  return (
    <>
    <Box sx={{
        boxShadow:'none',
        borderRadius:'20px',
        width:'300px',
        }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    textAlign:'center',
                    color:'#fff',
                }}>
                    <CardMedia 
                        image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channel?.snippet?.title}
                        sx={{
                            backgroundSize:'contain',
                            borderRadius:'50%', 
                            height:'180px',
                            width:'200px',
                            mb:2,
                            border: '1px solid #e3e3e3',
                            marginX:'auto'
                        }}
                    />
                    
                    <Typography variant='h6'>
                        {channel?.snippet?.title}
                        <CheckCircle sx={{fontSize: 14, color: 'gray', ml:'5px'}} />
                    </Typography>
                    <Stack direction="row" gap={3} justifyContent='center'>
                    {channel?.statistics?.subscriberCount && (
                        <Typography variant='caption'>
                            {
                            parseInt(channel?.statistics?.subscriberCount).toLocaleString()
                            } Subscriber
                        </Typography>
                    )}
                    {channel?.statistics?.subscriberCount && (
                    <Typography variant='caption'>
                        {
                        parseInt(channel?.statistics?.videoCount).toLocaleString()
                        } Videos
                    </Typography>
                    )}
                    </Stack>
                    
                </CardContent>
            </Link>
    </Box>
    </>
  )
}

export default ChannelCard