// Data contoh katalog. Gambar dari picsum.photos (butuh internet).
const img = (seed) => `https://picsum.photos/seed/${seed}/400/400`;

export const PRODUCTS = [
  { id: 1, title: 'Sepatu Lari Ringan', price: 49, discount: 20, rating: 4.5, image: img('sepatu'), description: 'Sepatu lari ringan dengan sol empuk, nyaman dipakai harian.' },
  { id: 2, title: 'Tas Ransel Laptop 15 Inci', price: 32, discount: 0, rating: 4.2, image: img('tas'), description: 'Ransel tahan air dengan kompartemen laptop dan banyak saku.' },
  { id: 3, title: 'Headphone Nirkabel', price: 79, discount: 15, rating: 4.8, image: img('headphone'), description: 'Headphone bluetooth dengan baterai tahan 30 jam.' },
  { id: 4, title: 'Jam Tangan Klasik', price: 120, discount: 0, rating: 4.0, image: img('jam'), description: 'Jam tangan analog bertali kulit, tampilan elegan.' },
  { id: 5, title: 'Botol Minum Stainless', price: 12, discount: 10, rating: 4.6, image: img('botol'), description: 'Botol stainless 750 ml, menjaga minuman dingin 24 jam.' },
  { id: 6, title: 'Kacamata Hitam', price: 25, discount: 0, rating: 3.9, image: img('kacamata'), description: 'Kacamata hitam dengan lensa anti UV400.' },
  { id: 7, title: 'Kemeja Flanel', price: 28, discount: 30, rating: 4.3, image: img('kemeja'), description: 'Kemeja flanel lembut, cocok untuk santai maupun kerja.' },
  { id: 8, title: 'Lampu Meja LED', price: 18, discount: 0, rating: 4.4, image: img('lampu'), description: 'Lampu meja LED dengan 3 tingkat kecerahan.' },
];
