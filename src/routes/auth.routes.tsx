import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { theme } from '../global/styles/theme'
import AppointmentDetails from '../screens/AppointmentDetails'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'


const {Navigator, Screen} = createNativeStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: theme.colors.secondary_100
            }
        }}>
            <Screen name='SignIn' component={SignIn} />
            <Screen name='Home' component={Home} />
            <Screen name='AppointmentDetails' component={AppointmentDetails} />
        </Navigator>
    )
}