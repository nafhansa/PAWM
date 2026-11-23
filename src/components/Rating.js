import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

// Menampilkan 5 bintang. Bintang ke-i menyala jika i <= nilai rating (dibulatkan).
export default function Rating({ value = 0 }) {
  const bintang = [];
  for (let i = 1; i <= 5; i++) {
    const menyala = i <= Math.round(value);
    bintang.push(
      <Text key={i} style={menyala ? styles.penuh : styles.kosong}>★</Text>
    );
  }
  return (
    <View style={styles.row}>
      {bintang}
      <Text style={styles.angka}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  penuh: { color: COLORS.star, fontSize: 14 },
  kosong: { color: COLORS.border, fontSize: 14 },
  angka: { marginLeft: 4, fontSize: 12, color: COLORS.muted },
});
