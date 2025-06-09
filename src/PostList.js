import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";
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
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: "red", mb: 2 }}>
        Lista de Posts
      </Typography>
      <List>
        {posts.map(post => (
          <ListItem
            key={post.id}
            button
            onClick={() => navigate(`/dados/${post.id}`)}
            sx={{
              borderBottom: "1px solid #eee",
              "&:hover": { backgroundColor: "#ffe5e5" },
            }}
          >
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default PostList;