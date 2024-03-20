export default function unknownEndpoint(_req, res) {
  res.status(404).json({
    error: "unknown endpoint",
  });
}
