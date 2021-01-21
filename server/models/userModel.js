const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'ציין שם פרטי'],
    trim: true,
    minlength: [2, 'שם פרטי לא תקין'],
    maxlength: [15, 'שם פרטי לא תקין'],
  },

  lastName: {
    type: String,
    required: [true, 'ציין שם משפחה'],
    trim: true,
    minlength: [2, 'שם פרטי לא תקין'],
    maxlength: [15, 'שם פרטי לא תקין'],
  },

  email: {
    type: String,
    required: [true, 'ציין אימייל'],
    trim: true,
    minlength: [6, 'אימייל לא תקין'],
    maxlength: [20, 'אימייל לא תקין'],
    lowercase: true,
    unique: [true, 'אימייל קיים במערכת'],
  },

  password: {
    type: String,
    required: [true, 'ציין סיסמא'],
    minlength: [8, 'סיסמא קצרה מידי'],
    maxlength: [20, 'סיסמא ארוכה מידי'],
  },

  //   passwordConfirm: {
  //     type: String,
  //     required: [true, 'ציין סיסמא שנית'],
  //     minlength: [8, 'סיסמא קצרה מידי'],
  //     maxlength: [15, 'סיסמא ארוכה מידי'],
  //   },

  // Will be changed later
  profilePicture: {
    type: String,
    minlength: 8,
    maxlength: 15,
    default: 'user.jpeg',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  restOwner: {
    type: Boolean,
    required: [true, 'ציין האם אתה בעל מסעדה'],
  },

  // Array of restaurants
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurants',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
