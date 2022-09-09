import { createNativeStackNavigator } from "@react-navigation/native-stack";
import{ Home } from '../screens/Home'
import{ Intro } from '../screens/Intro'
import{ Signup } from '../screens/Signup'
import{ Login } from '../screens/Login'
import{ Profile } from '../screens/Profile'
import {History} from '../screens/History'
import {Notification} from '../screens/Notifications'

const stack = createNativeStackNavigator();

export function StackNavigation () {
    return(
        <stack.Navigator initialRouteName="Home">
            <stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <stack.Screen name="Login" component={Login}/>
            
        </stack.Navigator>
    );
};