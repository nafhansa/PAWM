import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../theme/colors';
import HeaderBar from '../components/HeaderBar';

const DEVELOPERS = [
  { nama: 'Nafhan Shafy Aulia', nim: '18224027' },
  { nama: 'M. Faris Daffa', nim: '18224025' },
];

// Layar Tentang: dibuka dari tombol di tab Profil lewat Stack.
export default function About() {
  return (
    <View style={styles.container}>
      <HeaderBar title="Tentang" subtitle="Veriqu" onBack={() => router.back()} />
      <View style={styles.body}>
        <Text style={styles.heading}>Pengembang</Text>
        {DEVELOPERS.map((d) => (
          <View key={d.nim} style={styles.card}>
            <Text style={styles.name}>{d.nama}</Text>
            <Text style={styles.nim}>NIM {d.nim}</Text>
          </View>
        ))}
        <Text style={styles.note}>II3140 Web and Mobile Application Development</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  body: { padding: 16 },
  heading: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 8 },
  card: { backgroundColor: COLORS.card, borderRadius: 12, padding: 14, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  nim: { marginTop: 2, color: COLORS.muted },
  note: { marginTop: 16, color: COLORS.muted },
});
