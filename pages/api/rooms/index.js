import nc from "next-connect";
import { allRooms, newRoom } from "../../../controllers/roomController";
import dbConnect from "../../../config/dbConnect";

dbConnect();

const handler = nc();

handler.get(allRooms);

handler.post(newRoom);

export default handler;
