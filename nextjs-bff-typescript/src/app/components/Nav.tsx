import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import getAuthToken from "../utils/auth";
import ProtectedRoute from "./ProtectedRoute";
import NormalRoute from "./NormalRoute";
import Route from "./Route";


export const Nav = async () => {

  const auth = await getAuthToken();
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
                  <NormalRoute>
                      <Route link={'/login'} label={'Login'}/>

                  </NormalRoute>

                  <ProtectedRoute>
                      <Route link={'/movies'} label={'Movies'}/>

                  </ProtectedRoute>
                   <ProtectedRoute>
                       <Route link={'/logout'} label={'Logout'}/>
                   </ProtectedRoute>


              </Toolbar>
          </AppBar>
      </Box>
  );
};
