const { Schema, model } = require("mongoose");

const servicesModel = new Schema({
  service_name: {
    type: String,
    required: true,
    unique: true
  },
  service_description: {
    type: String,
    required: true

  },
  service_price: {
    type: Number,
    required: true,
    default: 0,
  },
  service_location: {
    type: String,
    required: true,
    default: "Some location"

  },
  service_image: {
    type: String,
    required: true
  },
  service_category: {
    //Object type id 
    type: Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
    default: "Some categories"
  },
  service_provider: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  service_availability: {
    type: String,
    required: true,
    default: "Available"
  },
  service_status: {
    type: Boolean,
    required: true
  },
  service_isdeleted: {
    type: Boolean,
    required: true,
    default: false
  }
},
  {
    timestamps: true
  }
);

module.exports = model("Services", servicesModel);
