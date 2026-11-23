// Menambah kotak kosong di baris terakhir supaya kartu terakhir tidak melebar.
export function padGrid(items, columns) {
  const rest = items.length % columns;
  if (rest === 0) return items;
  const spacers = Array.from({ length: columns - rest }, (_, i) => ({
    id: `spacer-${i}`,
    spacer: true,
  }));
  return [...items, ...spacers];
}
