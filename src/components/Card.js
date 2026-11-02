import { Pressable, Image, Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function Card({ title, price, image, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.price}>$ {price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 8,
    backgroundColor: COLORS.card,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 90,
    backgroundColor: COLORS.border,
  },
  body: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  price: {
    fontSize: 12,
    color: COLORS.accent,
    marginTop: 4,
  },
});
