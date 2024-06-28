import 'dotenv/config.js' // Load environment variables
import { fetchChannelData } from './controllers/youtubeAPI.js'

async function testFetchChannelData() {
  try {
    const channelId = 'UCAl9Ld79qaZxp9JzEOwd3aA'
    const channel = await fetchChannelData(channelId)
    console.log('Channel data fetched and saved:', channel)
  } catch (error) {
    console.error('Error testing fetchChannelData:', error)
  }
}

testFetchChannelData()
