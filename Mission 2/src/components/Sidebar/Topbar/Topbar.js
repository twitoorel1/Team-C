import React, { useState } from "react";
import { useTopbarContext } from "../../../context/Topbar.context";
import { InputAdornment, ListItemIcon, Menu, Typography } from "@mui/material";
import { AccountTreeOutlined, Send } from "@mui/icons-material";

// Styled Components - With MUI
import {
  AddNewChatIcon,
  ArrowDownIcon,
  BadgeNotification,
  BoxBottom,
  BoxInbox,
  BoxMain,
  BoxTop,
  IconMenu,
  IconNotification,
  IconSearch,
  MenuItemNotificationAndMessage,
  ProfileTopbar,
  TextFieldSearch
} from "./Topbar.Styled";
import { TypographyStyle } from "../../../style/globalCss";

// Demo Data
import notificationDemo from "../../../data/notification";
const profileDemo = "http://localhost/profile.png";

const Topbar = () => {
  const { setSearchFiled } = useTopbarContext();

  const [notification, setNotification] = useState(false);
  const [messageType, setMessageType] = useState(false);
  const open = Boolean(notification);
  const openMessageType = Boolean(messageType);

  return (
    <BoxMain>
      <BoxTop>
        <IconMenu />

        <ProfileTopbar>
          <img src={profileDemo} alt="Profile" />
          <TypographyStyle variant="h2">John Doe</TypographyStyle>
        </ProfileTopbar>

        <BadgeNotification
          onClick={(e) => setNotification(e.currentTarget)}
          badgeContent={3}
        >
          <IconNotification />
        </BadgeNotification>

        {/* Menu For Notification */}
        <Menu
          anchorEl={notification}
          open={open}
          onClose={() => setNotification(false)}
        >
          {notificationDemo.map((item, index) => (
            <MenuItemNotificationAndMessage key={index}>
              <h4>{item.name}</h4>
              <p>{item.lastMessage}</p>
            </MenuItemNotificationAndMessage>
          ))}
        </Menu>
      </BoxTop>

      <form>
        <TextFieldSearch
          onChange={(e) => setSearchFiled(e.target.value)}
          variant="standard"
          placeholder="Search Chat"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <IconSearch />
              </InputAdornment>
            )
          }}
        />
      </form>

      <BoxBottom>
        <BoxInbox>
          <TypographyStyle variant="h1">Inbox</TypographyStyle>
          <TypographyStyle
            variant="h3"
            onClick={(e) => setMessageType(e.currentTarget)}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              mt: "5px"
            }}
          >
            All Message <ArrowDownIcon />
          </TypographyStyle>

          {/* Menu For Type Message */}
          <Menu
            anchorEl={messageType}
            open={openMessageType}
            onClose={() => setMessageType(false)}
          >
            <MenuItemNotificationAndMessage>
              <ListItemIcon>
                <Send fontSize="small" />
                <Typography variant="h4" sx={{ ml: "10px" }}>
                  Direct Message
                </Typography>
              </ListItemIcon>
            </MenuItemNotificationAndMessage>
            <MenuItemNotificationAndMessage>
              <ListItemIcon>
                <AccountTreeOutlined fontSize="small" />
                <Typography variant="h4" sx={{ ml: "10px" }}>
                  Project Message
                </Typography>
              </ListItemIcon>
            </MenuItemNotificationAndMessage>
          </Menu>
        </BoxInbox>

        <AddNewChatIcon />
      </BoxBottom>
    </BoxMain>
  );
};

export default Topbar;
