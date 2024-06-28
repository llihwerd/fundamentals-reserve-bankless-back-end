import 'dotenv/config.js' // Load environment variables
import { fetchChannelData } from './controllers/youtubeAPI.js'

async function testFetchChannelData() {
  try {
    const channelId = 'your_channel_id_here'
    const channel = await fetchChannelData(Bankless)
    console.log('Channel data fetched and saved:', channel)
  } catch (error) {
    console.error('Error testing fetchChannelData:', error)
  }
}

testFetchChannelData()
