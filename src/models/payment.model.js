const { Schema, model } = require("mongoose");

const bookignsModel = new Schema({
    payment_user: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    payment_provider: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    payment_date: {
        type: Date,
        required: true
    },
    payment_service: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    payment_price: {
        type: Number,
        required: true,
        default: 0,
    },

    payment_status: {
        ///That's the payment status enum "Pending, In-Progress, Completed, Rejected, Cancelled, Failed"
        type: String,
        required: true,
        default: "Pending"
    },

    payment_isdeleted: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
        timestamps: true
    }
);

module.exports = model("Payments", bookignsModel);
