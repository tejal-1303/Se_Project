// .dotenv why you do me dirty like this D:
import dotenv from "dotenv";
dotenv.config();

export const PROD: boolean = JSON.parse(process.env.PROD || "false");

export const port = parseInt(<string>process.env.PORT) || 5000;

export const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

export const SERVER_URL = process.env.SERVER_URL || "http://localhost:5000";
