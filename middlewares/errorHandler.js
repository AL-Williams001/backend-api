export default function errorHandler(error, _req, res, next) {
  console.error(error.message);

  if (error.name === "CastError") {
    return res.status(500).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).send({ error: error.message });
  }

  next(error);
}
