import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['creator', 'learner', 'recruiter'],
    required: true,
  },
  profileType: {
    type: String,
    enum: ['showcase', 'learn', 'hire'],
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationDocuments: {
    studentId: String,
    nationalId: String,
    professionalCertification: String,
  },
  education: [{
    institution: String,
    degree: String,
    field: String,
    graduationYear: Number,
  }],
  experience: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
  }],
  skills: [String],
  achievements: [{
    title: String,
    description: String,
    date: Date,
    proof: String,
  }],
  courses: [{
    title: String,
    description: String,
    price: Number,
    type: {
      type: String,
      enum: ['live', 'recorded'],
    },
    schedule: Date,
  }],
  profileComplete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  socialLinks: {
    github: String,
    linkedin: String,
    portfolio: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: Number,
    comment: String,
    date: Date,
  }],
});

export default mongoose.models.User || mongoose.model('User', userSchema);