import React from "react";
import {Login} from "../Pages/Login/index";
import { Home } from "../Pages/Home/index";
import {createStackNavigator} from "@react-navigation/stack";


//createStackNavigator faz a transição entre telas, tem que informar as telas. 
const Stack = createStackNavigator();

export default function Routes(){

    return(
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
            options={{
                headerShown: false,
            }}/>

            <Stack.Screen name="Home" component={Home}
            options={{
                headerShown: false,
            }}/>


            </Stack.Navigator>
    );
}