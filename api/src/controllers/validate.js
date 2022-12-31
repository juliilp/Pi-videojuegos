const validatePost = (req, res, next) => {
  const { name, description, platforms, rating} = req.body;

  try {
    if (!name && !description && !platforms)
      throw Error("Missing name, description and plataform");
    if (!name && !description) throw Error("Missing name and description");
    if (!name && !platforms) throw Error("Missing name and platforms");
    if (!name) throw Error("Missing name");
    if (!description && !platforms) throw Error("Missing description and plataform");
    if (!description) throw Error("Missing description");
    if (!platforms) throw Error("Missing plataform");
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const validateId = (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) res.status(404).send("Missing ID");
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { validatePost, validateId };
