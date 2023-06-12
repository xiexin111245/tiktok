"use client";

import Grid from "@mui/material/Grid";
import NavLogoIcon from './icons/navlogo.svg';

export default function Home() {
  return (
    <Grid container height="calc(100vh - 38px)" alignItems="center" justifyContent="center" >
      <NavLogoIcon />
    </Grid>
  );
}
