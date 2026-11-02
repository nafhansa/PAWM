import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

export default function Button({ title, onPress, variant = 'primary', disabled = false }) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      style={[
        styles.base,
        variant === 'outline' && styles.outline,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, variant === 'outline' && styles.labelOutline, disabled && styles.labelDisabled]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.primary,
  },
  outline: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  disabled: {
    backgroundColor: COLORS.border,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.card,
  },
  labelOutline: {
    color: COLORS.primary,
  },
  labelDisabled: {
    color: COLORS.muted,
  },
});
