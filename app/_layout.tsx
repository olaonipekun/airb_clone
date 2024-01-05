import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon-bl': require('../assets/fonts/Montserrat-Black.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-bli': require('../assets/fonts/Montserrat-BlackItalic.ttf'),
    'mon-eb': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    'mon-ebi': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
    'mon-el': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    'mon-eli': require('../assets/fonts/Montserrat-ExtraLightItalic.ttf'),
    'mon-i': require('../assets/fonts/Montserrat-Italic.ttf'),
    'mon-l': require('../assets/fonts/Montserrat-Light.ttf'),
    'mon-li': require('../assets/fonts/Montserrat-LightItalic.ttf'),
    'mon-sbi': require('../assets/fonts/Montserrat-SemiBoldItalic.ttf'),
    'mon-t': require('../assets/fonts/Montserrat-Thin.ttf'),
    'mon-ti': require('../assets/fonts/Montserrat-ThinItalic.ttf')    
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name='(modals)/login' options={{ 
          title : "Log in or Sign up",
          headerTitleStyle: {
            fontFamily: 'mon-b'
          },
          headerLargeTitle: true,
          headerTintColor: Colors.primary,
          presentation: 'modal',
          headerLeft: ()=> (
            <TouchableOpacity onPress={()=> router.back()}>
              <Ionicons name='close-outline' size={28}  />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen name="listing/[id]" options={{
          headerTitle: ""
        }} />
        <Stack.Screen name='(modals)/booking' options={{
          presentation: 'transparentModal',
          headerLeft: ()=> (
            <TouchableOpacity onPress={()=> router.back()}>
              <Ionicons name='close-outline' size={28}  />
            </TouchableOpacity>
          )
        }}/>
      </Stack>
  );
}
