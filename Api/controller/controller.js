const dateFormat = require("./dateFormat");
const services = require("../services/services");

exports.add = async (req, res) => {
  try {
    let query = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      date: dateFormat(Date.now())
    };
    let result = await services.add(query);
    res.status(200).send('Blog posted successfully')
  } catch (error) {
    res.status(500).send('blog posted failed !')
    console.error(error) || console.log("blog posted failed");
  }
};

exports.getAll = async (req, res) => {
  try {
    let posts = await services.getAll();
    posts ? res.send(posts) : null;
  } catch (error) {
    console.error(error) || console.log("blog upload failed");
  }
};
