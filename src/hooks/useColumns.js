import { useWindowDimensions } from 'react-native';

// Jumlah kolom grid mengikuti lebar layar: HP 2, tablet/web 3 atau 4.
export function useColumns() {
  const { width } = useWindowDimensions();
  if (width >= 900) return 4;
  if (width >= 600) return 3;
  return 2;
}
