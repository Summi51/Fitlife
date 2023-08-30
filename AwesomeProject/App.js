import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserProfileScreen from "./screens/UserProfileScreen"; // Import UserProfileScreen

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
