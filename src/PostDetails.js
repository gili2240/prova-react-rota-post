import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@mui/material";

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
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: "red", mb: 2 }}>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.body}</Typography>
    </Paper>
  );
}

export default PostDetails;
