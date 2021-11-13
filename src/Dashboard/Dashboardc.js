import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../images/dashboard.png";
import AddCar from "./AddCar/AddCar";
import AllOrders from "./AllOrders/AllOrders";

import "./Dashboard.css";
import MyOrders from "./MyOrders/MyOrders";
import Payment from "./Payment/Payment";
import AddReview from "./Review/AddReview";

const drawerWidth = 220;

function Dashboard(props) {
  const { logout, user } = useAuth();
  console.log(logout);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawrer-styles">
      <Link to={"/home"}>
        <img style={{ width: "75%" }} src={logo} alt="" />
      </Link>

      <div className="mt-5">
        <Link to={`${url}/addproducts`}>
          {" "}
          <button className="dashbtn">Add New Car</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/makeadmin`}>
          {" "}
          <button className="dashbtn">Make Admin</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/reviews`}>
          {" "}
          <button className="dashbtn">Add Reviews</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/manageallproducts`}>
          {" "}
          <button className="dashbtn">Manage All Car</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/allorders`}>
          {" "}
          <button className="dashbtn"> Manange All Orders</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/payment`}>
          {" "}
          <button className="dashbtn"> Payment</button>{" "}
        </Link>
        <Divider />
        <Link to={`${url}/myorders`}>
          {" "}
          <button className="dashbtn"> My Orders</button>{" "}
        </Link>
        <Divider />
        <Link to={"/home"}>
          {" "}
          <button className="dashbtn"> Home</button>{" "}
        </Link>
        <Divider />
        <button onClick={logout} className="dashbtn">
          {" "}
          Logout
        </button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ textAlign: "center", color: "#111111" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography variant="h6" noWrap component="div">
            <h3>Welcome to your Dashboard,{user.displayName}</h3>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h1>Please select your option.</h1>
          </Route>
          <Route path={`${path}/addproducts`}>
            <AddCar />
          </Route>
          <Route path={`${path}/reviews`}>
            <AddReview />
          </Route>
          <Route path={`${path}/manageallproducts`}></Route>
          <Route path={`${path}/allorders`}>
            <AllOrders />
          </Route>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/myorders`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/myorders`}></Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
