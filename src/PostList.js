 import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <List>
        {posts.map(post => (
          <ListItem key={post.id} button onClick={() => navigate(`/dados/${post.id}`)}>
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default PostList;

