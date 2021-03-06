import nc from "next-connect";
import { getAllRooms, createRoom } from "../../../controllers/roomController";
import onError from "../../../middlewares/errors";
import dbConnect from "../../../config/dbConnect";

dbConnect();

const handler = nc({ onError });

handler.get(getAllRooms);

handler.post(createRoom);

export default handler;
