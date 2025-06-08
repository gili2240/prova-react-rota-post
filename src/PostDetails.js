 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div>Carregando...</div>;

  return (
    <div>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </div>
  );
}

export default PostDetails;

