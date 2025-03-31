import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerScreen from "../pages/DrawerScreen";
import Drawer2 from "../pages/Drawer2";

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (
      
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={DrawerScreen} />
                <Drawer.Screen name="Profile" component={Drawer2} />
            </Drawer.Navigator>
     
    );
}