import { FlatList, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../../theme/colors';
import { PRODUCTS } from '../../data/products';
import { padGrid } from '../../utils/grid';
import { useColumns } from '../../hooks/useColumns';
import { useFavorites } from '../../context/FavoritesContext';
import HeaderBar from '../../components/HeaderBar';
import Card from '../../components/Card';

export default function Favorites() {
  const { favorites } = useFavorites();
  const columns = useColumns();
  const items = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <View style={styles.container}>
      <HeaderBar title="Favorit" subtitle={`${items.length} produk`} />
      <FlatList
        key={columns}
        data={padGrid(items, columns)}
        keyExtractor={(item) => String(item.id)}
        numColumns={columns}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Belum ada favorit. Buka detail produk lalu ketuk Tambah ke Favorit.
          </Text>
        }
        renderItem={({ item }) =>
          item.spacer ? (
            <View style={styles.spacer} />
          ) : (
            <Card
              title={item.title}
              price={item.price}
              image={item.image}
              discount={item.discount}
              rating={item.rating}
              onPress={() => router.push(`/product/${item.id}`)}
            />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { padding: 6, paddingBottom: 24 },
  empty: { textAlign: 'center', marginTop: 40, paddingHorizontal: 24, color: COLORS.muted },
  spacer: { flex: 1, margin: 6 },
});
