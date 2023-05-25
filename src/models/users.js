///Requires the 
const { Schema, model } = require('mongoose')

//Crete Schema 
const usersModel = new Schema({
  user_name: {
    type: String,
    required: true
  },
  user_username: {
    type: String,
    required: true,
    unique: true
  },
  user_email: {
    type: String,
    required: true
  },
  user_password: {
    type: String,
    required: true
  },
  user_role: {
    //Enum for user_role "user", "admin", "provider"
    type: String,
    required: true,
    enum: ['user', 'admin', 'provider']
  },
  user_image: {
    type: String,
    required: true
  },

  user_contact: {
    type: String,
    required: true
  },
  user_last_login_date: {
    type: Date,
    required: true
  },

  user_isdeleted: {
    type: Boolean,
    required: true
  },

},
  {
    timestamps: true
  }

)

module.exports = model('Users', usersModel)
