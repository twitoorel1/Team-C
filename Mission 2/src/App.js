import React from "react";
import TopbarProvider from "./context/Topbar.context";

// Styled Components - With MUI
import { Main, MainContainer, Sidebar } from "./style/globalCss";
import Grid from "@mui/material/Unstable_Grid2";

// Components
import Topbar from "./components/Sidebar/Topbar/Topbar";
import MessageBox from "./components/Sidebar/MessageBox/MessageBox";
import TopMain from "./components/Main/TopMain/TopMain";
import Chat from "./components/Main/Chat/Chat";
import FooterChat from "./components/Main/FooterChat/FooterChat";

// Xs - Phone
// Sm - Tablet
// Md - Laptop
// Lg - Desktop

const App = () => {
  return (
    <TopbarProvider>
      <MainContainer>
        <Grid container>
          {/* Sidebar */}
          <Grid item xs={12} sm={5} md={4} lg={2}>
            <Sidebar>
              <Topbar />
              <MessageBox />
            </Sidebar>
          </Grid>
          {/* End */}

          {/* Main */}
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            lg={10}
            sx={{ display: { xs: "none", sm: "grid" } }}
          >
            <Main>
              <TopMain />
              <Chat />
              <FooterChat />
            </Main>
          </Grid>
          {/* End */}
        </Grid>
      </MainContainer>
    </TopbarProvider>
  );
};

export default App;
