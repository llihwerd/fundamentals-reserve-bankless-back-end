import axios from 'axios'
import Channel from '../models/channel.js'

// Function to fetch channel data from YouTube API
export const fetchChannelData = async (channelId) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
      params: {
        part: 'snippet',
        id: channelId,
        key: process.env.YOUTUBE_API_KEY,
      },
    })

    console.log('YouTube API Response:', response.data)

    const { data } = response
    if (!data || !data.items || data.items.length === 0) {
      throw new Error(`Channel with ID ${channelId} not found`)
    }

    const channelData = data.items[0].snippet

    // Save channel data to MongoDB
    const channel = new Channel({
      channelId: channelId,
      name: channelData.title,
      description: channelData.description,
      thumbnailUrl: channelData.thumbnails.default.url,
    })
    
    await channel.save()

    return channel
    
  } catch (error) {
    console.error('Error fetching channel data:', error)
    throw error
  }
}
