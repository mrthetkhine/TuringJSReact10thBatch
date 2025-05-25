"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import LinkMenu from "./LinkMenu";

export const Nav = () => {
  const pathname = usePathname();

  return (

      <Box  sx={{
              width: 'auto', // Ensure Box doesn't stretch
              flexGrow:1,
            }}>
          <AppBar position="static"  sx={{
              width: 'auto !important',
              flexGrow:1,
          }}>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >

                  </IconButton>
                  <LinkMenu url={'/'} label={"Home"}/>
                  <LinkMenu url={'/movies'} label={"Movies"}/>




              </Toolbar>
          </AppBar>
      </Box>
  );
};
