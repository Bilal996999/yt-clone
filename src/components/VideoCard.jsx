import { Link } from "react-router-dom"
import { Typography,Card, CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl, } from "../utils/constants"

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
    var dateObj = new Date(snippet?.publishedAt);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
  return (
    <Card sx={{width: {md: '300px', xs: '100%',}, boxShadow: 'none', borderRadius: 0, backgroundColor: 'transparent'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia className="card__thumbnail"
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:'100%', height: 180, borderRadius: '20px', backgroundSize:'auto'}}
            />
        </Link>
        <CardContent sx={{
            height: '130px'}}
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
                <Typography variant="caption" sx={{color: 'gray'}}>
                    
                    {`${month}/${day}/${year}`}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard