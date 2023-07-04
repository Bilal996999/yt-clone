import { Link } from "react-router-dom"
import { Typography,Card, CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl, } from "../utils/constants"

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    
  return (
    <Card sx={{width: {md: '300px', xs: '100%',}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: 350, height: 180}}
            />
        </Link>
        <CardContent sx={{
            backgroundColor: '#1E1E1E', 
            height: '160px'}}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight='bold' color='#676161'>
                    {snippet?.channelTitle.slice(0,50) || demoChannelTitle.slice(0,50)}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml:'5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard