import { Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 3, color: "red" }}>
        Bem-vindo!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Clique no botão abaixo para ver os posts.
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={() => navigate("/post")}
      >
        Ver Posts
      </Button>
    </Paper>
  );
}

export default Home;
