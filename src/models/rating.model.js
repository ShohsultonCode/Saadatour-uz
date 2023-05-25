const { Schema, model } = require("mongoose");

const ratingsModel = new Schema({
    rating_user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    rating_provider: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    rating_date: {
        type: Date,
        required: true
    },
    rating_service: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    rating_type: {
        type: Schema.Types.ObjectId,
        ref: "RatingTypes",
        required: true
    },

    rating_score: {
        ///That's the rating status enum "Pending, In-Progress, Completed, Rejected, Cancelled, Failed"
        type: String,
        required: true,
    },
    rating_comment: {
        type: String,
        required: true
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

module.exports = model("Ratings", ratingsModel);
