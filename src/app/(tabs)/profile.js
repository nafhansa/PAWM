import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { COLORS } from '../../theme/colors';
import { hasEmptyField, validateProfile } from '../../utils/validators';
import HeaderBar from '../../components/HeaderBar';
import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';

const EMPTY = { nama: '', email: '', hp: '', password: '', konfirmasi: '' };

export default function Profile() {
  const [values, setValues] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const errors = validateProfile(values);

  const set = (key) => (text) => setValues((v) => ({ ...v, [key]: text }));
  // Error tampil setelah field diisi, atau semuanya setelah tombol Simpan ditekan.
  const errorOf = (key) => (submitted || values[key] !== '' ? errors[key] : null);

  const save = () => {
    setSubmitted(true);
    if (Object.keys(errors).length === 0) {
      Alert.alert('Profil tersimpan', `Halo, ${values.nama.trim()}!`);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="Profil" subtitle="Lengkapi data akunmu" />
      <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
        <CustomInput
          label="Nama Lengkap"
          placeholder="Nama lengkap"
          value={values.nama}
          onChangeText={set('nama')}
          error={errorOf('nama')}
        />
        <CustomInput
          label="Email"
          placeholder="nama@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          onChangeText={set('email')}
          error={errorOf('email')}
        />
        <CustomInput
          label="No. HP"
          placeholder="08xxxxxxxxxx"
          keyboardType="phone-pad"
          value={values.hp}
          onChangeText={set('hp')}
          error={errorOf('hp')}
        />
        <CustomInput
          label="Password"
          placeholder="Minimal 8 karakter"
          secureTextEntry
          autoCapitalize="none"
          value={values.password}
          onChangeText={set('password')}
          error={errorOf('password')}
        />
        <CustomInput
          label="Ulangi Password"
          placeholder="Ketik ulang password"
          secureTextEntry
          autoCapitalize="none"
          value={values.konfirmasi}
          onChangeText={set('konfirmasi')}
          error={errorOf('konfirmasi')}
        />
        <Button title="Simpan Profil" onPress={save} disabled={hasEmptyField(values)} />
        <View style={styles.gap}>
          <Button title="Tentang Aplikasi" variant="outline" onPress={() => router.push('/about')} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  form: { padding: 16 },
  gap: { marginTop: 12 },
});
