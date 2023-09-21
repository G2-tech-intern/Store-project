const { default: mongoose } = require("mongoose");
const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        images: { type: [String], required: true },
        price: { type: Number, default: 0 },
        count: { type: Number },
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);
ProductSchema.index({ title: "text", desc: "text" });

module.exports = {
    ProductModel: mongoose.model("product", ProductSchema),
};
