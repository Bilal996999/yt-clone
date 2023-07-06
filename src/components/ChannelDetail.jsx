import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {Box} from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Videos from "./Videos"

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  console.log(channelDetail)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))
  },[id])

  return (
    <Box minHeight="95vh">
      <Box className="channel__detail" sx={{background: 'linear-gradient(0deg, rgba(252,21,3,1) 0%, rgba(84,41,41,1) 50%, rgba(0,0,0,1) 100%);',height:'300px'}}>
        <ChannelCard channel={channelDetail} />
      </Box>
      <Box display="flex"  p="2" sx={{ml:{sm:'150px'},mt:'100px'}}>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail