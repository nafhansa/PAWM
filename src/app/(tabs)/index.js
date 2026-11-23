import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../../theme/colors';
import { PRODUCTS } from '../../data/products';
import { padGrid } from '../../utils/grid';
import { useColumns } from '../../hooks/useColumns';
import HeaderBar from '../../components/HeaderBar';
import CustomInput from '../../components/CustomInput';
import Card from '../../components/Card';

const BANNER_IMAGE = 'https://picsum.photos/seed/promo/800/300';
const SORTS = [
  { key: 'asc', label: 'Termurah' },
  { key: 'desc', label: 'Termahal' },
];

// Banner promo: teks diletakkan di atas gambar dengan position: absolute.
function PromoBanner() {
  return (
    <View style={styles.banner}>
      <Image source={{ uri: BANNER_IMAGE }} style={styles.bannerImage} />
      <View style={styles.bannerOverlay}>
        <Text style={styles.bannerTitle}>Diskon 50%</Text>
        <Text style={styles.bannerSub}>Khusus produk pilihan minggu ini</Text>
      </View>
    </View>
  );
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState(null); // null | 'asc' | 'desc'
  const columns = useColumns();

  const filtered = PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(query.trim().toLowerCase())
  );
  // sort() mengubah array asalnya, jadi urutkan salinan hasil filter.
  const data = sort
    ? [...filtered].sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price))
    : filtered;

  const header = (
    <View>
      <PromoBanner />
      <View style={styles.chips}>
        {SORTS.map((s) => {
          const active = sort === s.key;
          return (
            <Pressable
              key={s.key}
              onPress={() => setSort(active ? null : s.key)}
              style={[styles.chip, active && styles.chipActive]}>
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{s.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderBar title="Veriqu" subtitle={`${data.length} produk`} />
      <View style={styles.search}>
        <CustomInput
          icon="search"
          placeholder="Cari produk..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <FlatList
        key={columns} // jumlah kolom berubah -> FlatList wajib dibuat ulang
        data={padGrid(data, columns)}
        keyExtractor={(item) => String(item.id)}
        numColumns={columns}
        contentContainerStyle={styles.list}
        ListHeaderComponent={header}
        ListEmptyComponent={<Text style={styles.empty}>Produk tidak ditemukan</Text>}
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
  search: { paddingHorizontal: 12, paddingTop: 12 },
  list: { paddingHorizontal: 6, paddingBottom: 24 },
  empty: { textAlign: 'center', marginTop: 40, color: COLORS.muted },
  spacer: { flex: 1, margin: 6 },
  banner: { height: 140, margin: 6, borderRadius: 12, overflow: 'hidden' },
  bannerImage: { width: '100%', height: '100%', backgroundColor: COLORS.placeholder },
  bannerOverlay: {
    position: 'absolute', left: 0, right: 0, bottom: 0,
    padding: 12, backgroundColor: COLORS.overlay,
  },
  bannerTitle: { color: COLORS.white, fontSize: 22, fontWeight: 'bold' },
  bannerSub: { color: COLORS.headerSub, fontSize: 13, marginTop: 2 },
  chips: { flexDirection: 'row', paddingHorizontal: 6, paddingBottom: 6 },
  chip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20,
    backgroundColor: COLORS.chip, marginRight: 8,
  },
  chipActive: { backgroundColor: COLORS.primary },
  chipText: { color: COLORS.text, fontWeight: '600' },
  chipTextActive: { color: COLORS.white },
});
