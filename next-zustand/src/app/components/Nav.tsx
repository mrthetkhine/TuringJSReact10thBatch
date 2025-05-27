"use client";


import { usePathname } from "next/navigation";
import {AppBar, Box,  IconButton, Toolbar} from "@mui/material";
import LinkMenu from "./LinkMenu";
import ProtectedRoute from "@/app/components/ProtectedRoute";
import useAuth from "@/app/hooks/useAuth";

export const Nav = () => {
  const auth = useAuth();
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
                  {
                      !auth &&  <LinkMenu url={'/login'} label={"Login"}/>
                  }

                  <ProtectedRoute>
                      <LinkMenu url={'/movies'} label={"Movies"}/>
                  </ProtectedRoute>
                  <ProtectedRoute>
                    <LinkMenu url={'/logout'} label={"Logout"}/>
                  </ProtectedRoute>

              </Toolbar>
          </AppBar>
      </Box>
  );
};
