const Blog = require("../model/posts");

exports.add = async (data) => {
  try {
    const blog = new Blog(data);
    blog.save();

    return blog;
  } catch (error) {
    console.error(error);
  }
};

exports.getAll = async () => {
  let result = await Blog.find();

  return result;
};
