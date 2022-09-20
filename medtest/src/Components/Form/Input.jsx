import React from "react";
import styles from "./Input.module.css";
import TextField from "@mui/material/TextField";

export default function Input({ label, type, name, onChange, error, onBlur }) {
  return (
    <div className={styles.wrapper}>
      <TextField
        margin="normal"
        required
        fullWidth
        name={name}
        label={label}
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="current-password"
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
