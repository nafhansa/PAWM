import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from './src/theme/colors';
import { PRODUCTS } from './src/data/products';
import HeaderBar from './src/components/HeaderBar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <HeaderBar title="KatalogKu" />

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Card title={item.title} price={item.price} onPress={() => {}} />
        )}
      />

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
  row: { flexDirection: 'row', gap: 8, marginTop: 8, justifyContent: 'space-between' },
});
