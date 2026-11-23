import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import Rating from './Rating';
import { COLORS } from '../theme/colors';

export default function Card({ title, price, image, discount, rating, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
        {discount ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>-{discount}%</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
        {rating ? <Rating value={rating} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1, margin: 6, backgroundColor: COLORS.card,
    borderRadius: 12, overflow: 'hidden',
    elevation: 2, // bayangan Android
    shadowColor: COLORS.shadow, shadowOpacity: 0.1, // bayangan iOS
    shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
  },
  image: { width: '100%', aspectRatio: 1, backgroundColor: COLORS.placeholder },
  badge: { position: 'absolute', top: 8, left: 8,
    backgroundColor: COLORS.accent, borderRadius: 6,
    paddingHorizontal: 6, paddingVertical: 2 },
  badgeText: { color: COLORS.card, fontSize: 12, fontWeight: 'bold' },
  body: { padding: 10 },
  title: { fontSize: 14, color: COLORS.text, minHeight: 36 },
  price: { marginTop: 4, fontWeight: 'bold', color: COLORS.accent },
});
