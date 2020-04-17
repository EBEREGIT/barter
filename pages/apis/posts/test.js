import dbConnect from "../../../utils/dbConnect.js"

dbConnect();

export default async (request, response) => {
    response.json({ message: "connected" })
}