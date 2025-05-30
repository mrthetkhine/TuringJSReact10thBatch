"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import useAuth from "@/app/auth/useAuth";
import LinkMenu from "@/app/components/LinkMenu";




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
                  {
                      !useAuth() && <LinkMenu url={'/login'} label={"Login"}/>
                  }
                  {
                      useAuth() && <LinkMenu url={'/logout'} label={"Logout"}/>
                  }
                  {
                      useAuth() && <LinkMenu url={'/'} label={"Home"}/>
                  }

                  {
                      useAuth() && <LinkMenu url={'/movies'} label={"Movies"}/>
                  }


                 {/* <Link

                      href="/blog"
                  >
                      <Typography component="div" sx={{ paddingLeft: 1,paddingRight:1 }}>

                          Blog

                      </Typography>
                  </Link>*/}

              </Toolbar>
          </AppBar>
      </Box>
  );
};
