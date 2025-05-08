import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs screenOptions={{
          tabBarStyle:{
          backgroundColor: "#000",
        },
        headerStyle:{
          backgroundColor: "#000",
        },
        }}>
            <Tabs.Screen
                name="home"
                options={{
                title: 'Home',
                headerTitleStyle: {
                  color: '#fff'
              },
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        
          }}    
          />
            

            <Tabs.Screen
                name="travels"
                options={{
                  title: 'Minhas Caronas',
                  headerTitleStyle: {
                    color: '#fff'
                },
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="map-o" color={color} />,
          
            }}    
                
            />
            <Tabs.Screen
                name="settings"
                options={{
                  title: 'Meu Perfil',
                  headerTitleStyle: {
                    color: '#fff'
                },
                  tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
                
            />
        </Tabs>
    );
}
