exports.getTodos = (req, res) => {
  res.json({
    code: 200,
    status: "success",
    message: "Get all todos",
  });
};
