import ErrorHandler from "../utils/errorHandler";

export default (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  if (error.name === "CastError") {
    const message = `Resource not found. Invalid ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }
  res.status(error.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
