import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from './src/theme/colors';
import HeaderBar from './src/components/HeaderBar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <HeaderBar title="KatalogKu" />
      <Card title="Kemeja Batik Parang" price="25" />
      <CustomInput label="Email" value="budi@itb.ac.id" onChangeText={() => {}} />
      <View style={styles.row}>
        <Button title="Simpan" onPress={() => {}} />
        <Button title="Batal" variant="outline" onPress={() => {}} />
        <Button title="Kirim" disabled />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16, gap: 12 },
  row: { flexDirection: 'row', gap: 8, marginTop: 8 },
});
