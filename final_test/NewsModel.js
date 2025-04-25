import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    headline: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    publishDate: { type: Date, default: Date.now },
}, { timestamps: true, versionKey: false });

const News = mongoose.model("News", newsSchema);
export default News;

    