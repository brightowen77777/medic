import { createNativeStackNavigator } from "@react-navigation/native-stack";
import{ Home } from '../screens/Home'
import{ Intro } from '../screens/Intro'
import{ Signup } from '../screens/Signup'
import{ Login } from '../screens/Login'
import{ Profile } from '../screens/Profile'

const stack = createNativeStackNavigator();

export function StackNavigation () {
    return(
        <stack.Navigator initialRouteName="Intro">
            <stack.Screen name="Home" component={Home}/>
            <stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <stack.Screen name="Login" component={Login}/>
            <stack.Screen name="Profile" component={Profile}/>
        </stack.Navigator>
    );
};