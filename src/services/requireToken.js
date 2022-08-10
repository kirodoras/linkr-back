import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function requireToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    if (!token || !id) {
      return res.status(401).send("Invalid token");
    }

    res.locals.userId = id;

    next();
  } catch (error) {
    res.status(401).send("Invalid format");
  }
}