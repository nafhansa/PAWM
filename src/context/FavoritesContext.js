import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Menyimpan id produk favorit supaya bisa dipakai di Detail, Favorit, dan badge tab.
// Disimpan permanen di AsyncStorage: dibaca saat Provider dibuka, ditulis setiap berubah.
const STORAGE_KEY = 'veriqu:favorites';
const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        // Gabungkan dengan perubahan yang terjadi sebelum pembacaan selesai.
        if (raw) setFavorites((prev) => [...new Set([...JSON.parse(raw), ...prev])]);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)).catch(() => {});
  }, [favorites, loaded]);

  const isFavorite = (id) => favorites.includes(id);
  const toggleFavorite = (id) =>
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites harus dipakai di dalam FavoritesProvider');
  return ctx;
}
