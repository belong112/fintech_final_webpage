import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  Select,
} from "@material-ui/core";
import styles from "../styles/test.module.css";

// components
import MyTable from "../components/MyTable";

// self-defined-components

const invest = () => {
  const [risk, setRisk] = useState("low");

  return (
    <div className={styles.root}>
      <div className={styles.displayBox}>
        <Typography className={styles.title} variant="h1">
          Give me a Title
        </Typography>
      </div>
      <div className={styles.displayBox}>
        <FormControl className={styles.formControl}>
          <InputLabel>請選擇你的風險程度</InputLabel>
          <Select
            id="demo-simple-select"
            labelId="demo-simple-select-label"
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
          >
            <MenuItem value={"low"}>低</MenuItem>
            <MenuItem value={"middle"}>中</MenuItem>
            <MenuItem value={"high"}>高</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.displayBox}>
        <MyTable />
      </div>
    </div>
  );
};

export default invest;
