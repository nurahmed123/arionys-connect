import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['live', 'recorded'],
    required: true,
  },
  schedule: Date,
  duration: Number,
  materials: [{
    title: String,
    type: String,
    url: String,
  }],
  enrolledStudents: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    progress: {
      type: Number,
      default: 0,
    },
  }],
  reviews: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Course || mongoose.model('Course', courseSchema);