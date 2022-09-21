import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Medtest
      </Link>
      {" Desenvolvido por Matheus Machado "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </footer>
  );
}
