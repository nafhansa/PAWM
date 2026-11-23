import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { COLORS } from '../../theme/colors';
import { PRODUCTS } from '../../data/products';
import HeaderBar from '../../components/HeaderBar';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import { useFavorites } from '../../context/FavoritesContext';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const product = PRODUCTS.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <View style={styles.container}>
        <HeaderBar title="Detail Produk" onBack={() => router.back()} />
        <Text style={styles.empty}>Produk tidak ditemukan</Text>
      </View>
    );
  }

  const finalPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price;

  return (
    <View style={styles.container}>
      <HeaderBar title={product.title} onBack={() => router.back()} />
      <ScrollView contentContainerStyle={styles.detail}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Rating value={product.rating} />
        <Text style={styles.price}>$ {finalPrice}</Text>
        {product.discount ? (
          <Text style={styles.oldPrice}>$ {product.price} (-{product.discount}%)</Text>
        ) : null}
        <Text style={styles.desc}>{product.description}</Text>
        <View style={styles.back}>
          <Button
            title={isFavorite(product.id) ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
            variant={isFavorite(product.id) ? 'danger' : 'primary'}
            onPress={() => toggleFavorite(product.id)}
          />
        </View>
        <View style={styles.gap}>
          <Button title="Kembali ke katalog" variant="outline" onPress={() => router.back()} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  empty: { textAlign: 'center', marginTop: 40, color: COLORS.muted },
  detail: { padding: 16 },
  image: { width: '100%', aspectRatio: 1, borderRadius: 12, backgroundColor: '#EEE' },
  title: { marginTop: 16, fontSize: 22, fontWeight: 'bold', color: COLORS.text },
  price: { marginTop: 12, fontSize: 24, fontWeight: 'bold', color: COLORS.accent },
  oldPrice: { color: COLORS.muted, marginTop: 2 },
  desc: { marginTop: 16, fontSize: 15, lineHeight: 22, color: COLORS.text },
  back: { marginTop: 24 },
  gap: { marginTop: 12 },
});
