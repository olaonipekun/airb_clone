import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

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

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
