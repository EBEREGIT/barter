import dbConnect from "../../../utils/dbConnect.js";
import Post from "../../../models/Posts.js";

dbConnect();

export default async (request, response) => {
  const { method } = request;

  switch (method) {
    // retrieve all posts
    case "GET":
      try {
        const posts = await Post.find({});
        response.status(200).json({ success: true, message: "All Posts Retrieved Successfully", data: posts });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;

    // add new post
    case "POST":
      try {
        const post = await Post.create(request.body);
        response.status(201).json({ success: true, message: "Post Created Successfully", data: post });
      } catch (error) {
        response.status(400).json({ success: false });
      }
      break;
    default:
      response.status(400).json({
        success: false,
        error: "Request Verb Must be Either GET or POST",
      });
      break;
  }
};
