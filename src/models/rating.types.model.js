const { Schema, model } = require("mongoose");

const ratingTypesModel = new Schema({
    rating_name: {
        type: String,
        required: true
    },

    rating_status: {
        ///That's the rating status enum "Pending, In-Progress, Completed, Rejected, Cancelled, Failed"
        type: Boolean,
        required: true,
        default: true
    },

    rating_isdeleted: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
        timestamps: true
    }
);

module.exports = model("RatingTypes", ratingTypesModel);
