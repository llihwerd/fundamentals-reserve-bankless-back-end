import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
  videoId: { type: String, required: true, unique: true },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  title: String,
  description: String,
  publishedAt: Date,
  thumbnailUrl: String,
  duration: Number,
  views: Number,
  likes: Number,
  dislikes: Number,
  commentsCount: Number,
  createdAt: { type: Date, default: Date.now },
});

const Video = mongoose.model('Video', videoSchema)

export default { Video }
