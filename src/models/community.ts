import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['public', 'private'],
    default: 'public',
  },
  accessCode: {
    type: String,
    required: function() {
      return this.type === 'private';
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  posts: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: String,
    attachments: [String],
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    comments: [{
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      content: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Community || mongoose.model('Community', communitySchema);