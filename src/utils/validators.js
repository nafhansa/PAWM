// Validasi form Profil. Mengembalikan objek pesan error; kosong berarti valid.
export function validateProfile({ nama, email, hp, password, konfirmasi }) {
  const errors = {};
  if (!nama.trim()) errors.nama = 'Nama wajib diisi';
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Format email tidak valid';
  if (!/^08\d{8,11}$/.test(hp)) errors.hp = 'No. HP diawali 08, total 10-13 digit';
  if (password.length < 8) errors.password = 'Password minimal 8 karakter';
  if (konfirmasi !== password) errors.konfirmasi = 'Konfirmasi password tidak sama';
  return errors;
}

// True bila masih ada field yang kosong.
export function hasEmptyField(values) {
  return Object.values(values).some((v) => v.trim() === '');
}
