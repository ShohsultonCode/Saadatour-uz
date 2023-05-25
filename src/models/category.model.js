const { Schema, model } = require("mongoose");

const categoriesModel = new Schema({
    category_name: {
        type: String,
        required: true,
        unique: true
    },
    category_isdeleted: {
        type: Boolean,
        required: true
    }

},
    {
        timestamps: true
    }
);

module.exports = model("Categories", categoriesModel);
