import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

// Struktur navigasi Veriqu (Expo Router):
//   RootNavigator (Stack)
//   |- (tabs) -> TabsNavigator: Beranda | Favorit | Keranjang | Profil
//   |- product/[id] -> Detail produk
//   |- about -> Tentang (dibuka dari Profil)
// File src/app/_layout.js dan src/app/(tabs)/_layout.js hanya meneruskan
// dua komponen ini supaya seluruh navigasi ada di satu berkas.

function tabIcon(name) {
  function TabIcon({ color, size }) {
    return <Ionicons name={name} size={size} color={color} />;
  }
  return TabIcon;
}
const ICONS = {
  home: tabIcon('home'),
  heart: tabIcon('heart'),
  cart: tabIcon('cart'),
  person: tabIcon('person'),
};

export function TabsNavigator() {
  const { favorites } = useFavorites();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
      }}>
      <Tabs.Screen name="index" options={{ title: 'Beranda', tabBarIcon: ICONS.home }} />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorit',
          tabBarIcon: ICONS.heart,
          tabBarBadge: favorites.length || undefined, // angka di ikon tab
        }}
      />
      <Tabs.Screen name="cart" options={{ title: 'Keranjang', tabBarIcon: ICONS.cart }} />
      <Tabs.Screen name="profile" options={{ title: 'Profil', tabBarIcon: ICONS.person }} />
    </Tabs>
  );
}

// Header bawaan dimatikan karena tiap halaman memakai HeaderBar sendiri.
export function RootNavigator() {
  return (
    <FavoritesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
        }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
        <Stack.Screen name="about" />
      </Stack>
      <StatusBar style="light" />
    </FavoritesProvider>
  );
}
