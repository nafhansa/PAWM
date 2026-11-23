import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../theme/colors';
import HeaderBar from '../../components/HeaderBar';

// Layar Keranjang sederhana: belum ada fitur belanja, hanya tampilan kosong.
export default function Cart() {
  return (
    <View style={styles.container}>
      <HeaderBar title="Keranjang" subtitle="0 produk" />
      <View style={styles.empty}>
        <Ionicons name="cart-outline" size={64} color={COLORS.muted} />
        <Text style={styles.text}>Keranjang masih kosong</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { marginTop: 12, fontSize: 16, color: COLORS.muted },
});
