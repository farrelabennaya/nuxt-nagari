import { Rumah } from '~/models/Rumah'; // Sesuaikan dengan lokasi model Anda

export default defineEventHandler(async () => {
  const rumahs = await Rumah.query().with('alamat').fetch(); // Ambil data dari database
  return rumahs;
});
