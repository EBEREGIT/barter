import dbConnect from "../../../utils/dbConnect.js";
import Post from "../../../models/Posts.js";

dbConnect();

export default async (request, response) => {
  const {
    query: { id },
    method,
  } = request;

  switch (method) {
    //   retrieve one post
    case "GET":
      try {
        const post = await Post.findById(id);
        response.status(200).json({ success: true, message: "Post Retrieved Successfully", data: post });
      } catch (error) {
        response.status(400).json({ success: false, error });
      }
      break;

    //   update one post
    case "PUT":
      try {
        const post = await Post.findByIdAndUpdate(id, request.body, {
          new: true,
          runValidators: true,
        });
        response.status(201).json({ success: true, message: "Post Updated Successfully", data: post });
      } catch (error) {
        response.status(400).json({ success: false, error });
      }
      break;

    //   delete one post
    case "DELETE":
      try {
        const post = await Post.deleteOne({ _id: id });

        response.status(200).json({ success: true, message: "Post Deleted Successfully", data: post });
      } catch (error) {
        response.status(400).json({ success: false, error });
      }
      break;

    default:
      response.status(400).json({
        success: false,
        error: "Request Verb Must be Either GET, DELETE or PUT",
      });
      break;
  }
};
