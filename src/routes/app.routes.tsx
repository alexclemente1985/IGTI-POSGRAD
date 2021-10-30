import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddGuardiansScreen} from '../pages/AddGuardiansScreen';
import {CallsHistoryScreen} from '../pages/CallsHistoryScreen';
import {WatchedUsersScreen} from '../pages/WatchedUsersScreen';
import {HomeScreen} from '../pages/HomeScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Header from '../components/Header';
import styles from '../styles';
import {SettingsScreen} from '../pages/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChatScreen from '../pages/ChatScreen';

export function AppRoutes() {
  const HomeStack = createNativeStackNavigator();
  const CallsHistoryStack = createNativeStackNavigator();
  const WatchedUsersStack = createNativeStackNavigator();
  const AddGuardiansStack = createNativeStackNavigator();
  const SettingsStack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  /*  const config = {
    screens: {
      Home: {
        path: 'home',
      },
    },
  }; */

  const horizontalAnimation: NativeStackNavigationOptions = {
    gestureEnabled: true,
    animation: 'slide_from_left',
  };

  function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={horizontalAnimation}>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Olá,  Usuário!',
            header: Header,
            contentStyle: styles.container,
          }}
        />
        <HomeStack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            title: 'Chat',
            header: Header,
            contentStyle: styles.container,
          }}
        />
      </HomeStack.Navigator>
    );
  }

  function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      </SettingsStack.Navigator>
    );
  }
  function CallsHistoryStackScreen() {
    return (
      <CallsHistoryStack.Navigator>
        <CallsHistoryStack.Screen
          name="CallsHistory"
          component={CallsHistoryScreen}
        />
      </CallsHistoryStack.Navigator>
    );
  }

  function WatchedUsersStackScreen() {
    return (
      <WatchedUsersStack.Navigator>
        <WatchedUsersStack.Screen
          name="WatchedUsers"
          component={WatchedUsersScreen}
        />
      </WatchedUsersStack.Navigator>
    );
  }

  function AddGuardiansStackScreen() {
    return (
      <AddGuardiansStack.Navigator>
        <AddGuardiansStack.Screen
          name="AddGuardians"
          component={AddGuardiansScreen}
          options={{
            title: 'Adicionar Guardiões',
            header: Header,
            contentStyle: styles.container,
          }}
        />
      </AddGuardiansStack.Navigator>
    );
  }

  /* function ChatStackScreen(){
    return (

    )
  } */

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={CallsHistoryStackScreen}
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({color, size}) => (
            <Icon name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Protected"
        component={WatchedUsersStackScreen}
        options={{
          tabBarLabel: 'Usuários',
          tabBarIcon: ({color, size}) => (
            <Icon name="person-pin" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="+Guardians"
        component={AddGuardiansStackScreen}
        options={{
          tabBarLabel: 'Guardiões',
          tabBarIcon: ({color, size}) => (
            <Icon name="emoji-people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Config.',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
