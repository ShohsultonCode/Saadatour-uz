const { Schema, model } = require("mongoose");

const bookignsModel = new Schema({
    booking_user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    booking_provider: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    booking_date: {
        type: Date,
        required: true
    },
    booking_service: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    booking_price: {
        type: Number,
        required: true,
        default: 0,
    },

    service_status: {
        ///That's the service status enum "Pending, In-Progress, Completed, Rejected, Cancelled, Failed"
        type: String,
        required: true,
        default: "Pending"
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

module.exports = model("Bookings", bookignsModel);
