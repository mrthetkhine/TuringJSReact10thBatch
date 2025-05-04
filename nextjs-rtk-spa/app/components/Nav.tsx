"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";


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
                  <Typography component="div"
                              sx={{ paddingLeft: 1,paddingRight:1 }}>
                      <Link

                          href="/"
                      >
                          Home
                      </Link>
                  </Typography>
                  <Link

                      href="/dashboard"
                  >
                      <Typography component="div" sx={{ paddingLeft: 1,paddingRight:1 }}>

                              Dashboard

                      </Typography>
                  </Link>
                  <Link

                      href="/movies"
                  >
                      <Typography component="div" sx={{ paddingLeft: 1,paddingRight:1 }}>

                          Movies

                      </Typography>
                  </Link>
                  <Link

                      href="/quotes"
                  >
                      <Typography component="div" sx={{ paddingLeft: 1,paddingRight:1 }}>

                          Quotes

                      </Typography>
                  </Link>
                  <Button color="inherit">Login</Button>
              </Toolbar>
          </AppBar>
      </Box>
  );
};
