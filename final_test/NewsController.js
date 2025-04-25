import News from "./NewsModel.js";

export const getAllNews = async (req, res) => {
  const news = await News.find().sort({ date: 1 });
  res.json(news);
};

export const getNewsById = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) return res.status(404).json({ message: "News not found" });
  res.json(news);
};

export const createNews = async (req, res) => {
  const news = new News({ ...req.body });
  if (!news.headline || !news.summary || !news.content || !news.category || !news.image) {
    return res.status(400).json({ message: "headline, summary, content, category, image are required" });
  }
  const saved = await news.save();
  res.status(201).json(saved);
};

export const deleteNews = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) return res.status(404).json({ message: "News not found" });

  await news.deleteOne();
  res.json({ message: "News deleted" });
};

export const updateNews = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) return res.status(404).json({ message: "News not found" });

  if (!req.body.headline || !req.body.summary || !req.body.content || !req.body.category || !req.body.image) {
    return res.status(400).json({ message: "headline, summary, content, category, image are required" });
  }

  const updated = await News.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};
