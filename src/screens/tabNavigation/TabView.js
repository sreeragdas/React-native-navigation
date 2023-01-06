import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Job from '../tabScreen/Job';
import Profile from '../tabScreen/Profile';
import Search from '../tabScreen/Search';
const Tab = createBottomTabNavigator();
const TabView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Job" component={Job} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};
export default TabView;
