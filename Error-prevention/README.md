# Latihan: Pencegahan Kesalahan

**Status:** Diterjemahkan secara otomatis dari bahasa Bahasa Inggris

## Petunjuk

**Catatan:** Silakan gunakan blok kode yang ada di bagian bawah bacaan ini untuk menyelesaikan latihan yang dibuat secara berulang.

---

## Tugas 1: Buatlah Kode Deklarasi Fungsi

Anda perlu membuat kode deklarasi fungsi bernama `addTwoNums`, yang menerima angka `a` dan `b` dan log konsol `a + b`.

---

## Tugas 2: Memanggil Fungsi `addTwoNums` dengan Sebuah Angka dan Sebuah String

Anda perlu memanggil `addTwoNums` menggunakan argumen berikut: `5` dan `"5"`.

**Catatan:** Melewatkan angka dan string akan menghasilkan `"55"` (penggabungan string) karena pemaksaan tipe JavaScript. Hal ini akan ditangani nanti ketika Anda menambahkan logika pengecekan tipe pada Tugas 4 di bawah ini.

---

## Tugas 3: Perbarui Fungsi `addTwoNums` dengan Blok `try..catch`

Tambahkan blok `try` dan `catch` di dalam tubuh definisi fungsi. Untuk saat ini, pastikan bahwa log konsol dari `a + b` berada di dalam blok `try`. Selain itu, blok `catch` harus menangkap kesalahan bernama `err` dan, di dalam tubuh blok `catch`, Anda perlu mencatat nilai `err`.

---

## Tugas 4: Jika Argumen yang Dimasukkan Bukan Berupa Angka, Lemparkan Kesalahan

**Catatan:** Kata kunci `new` digunakan di sini untuk membuat instance baru dari objek `TypeError`. Anda akan mempelajari lebih lanjut mengenai kata kunci `new` dan objek di pelajaran selanjutnya. Untuk saat ini, pahami bahwa `throw new TypeError('message')` adalah cara standar untuk melempar kesalahan tipe dalam JavaScript.

Jika salah satu argumen yang dioper ke fungsi `addTwoNums` bukan angka, Anda akan melemparkan kesalahan.

Secara khusus, buatlah kode bersyarat dengan logika berikut:

- Jika `typeof` parameter `a` tidak sama dengan `'number'`, lemparkan `TypeError` baru. Di dalam `TypeError`, sertakan pesan kesalahan khusus: `'The first argument is not a number.'`
- Jika tidak, jika `typeof` parameter `b` tidak sama dengan `'number'`, lemparkan `TypeError` baru. Di dalam `TypeError`, sertakan pesan kesalahan khusus: `'The second argument is not a number.'`
- Jika tidak, catat jumlah `a + b` ke konsol.

Setelah Anda menyelesaikan tugas ini:

- Bungkus semua logika bersyarat di dalam blok `try`.
- Blok `catch` akan menangani setiap kesalahan yang dilemparkan oleh kondisional dan mencatatnya dengan tepat.

**Catatan: Jadi, bagaimana Ini Menangani pemaksaan tipe?**

Dengan secara eksplisit memeriksa `typeof` dari `a` dan `b`, fungsi ini memastikan hanya angka yang diterima.

Melewatkan string seperti `"5"` tidak akan lagi menghasilkan `"55"` karena kesalahan akan menghentikan eksekusi sebelum operasi penambahan.

---

## Tugas 5: Perbarui Blok `catch`

Di dalam blok `catch`, perbarui kode dari `console.log(err)` ke `console.log("Error!", err)`.

---

## Tugas 6: Memanggil Fungsi `addTwoNums`

Panggil fungsi `addTwoNums` menggunakan `5` dan `"5"` sebagai argumen.

---

## Tugas 7: Tambahkan Log Konsol Lain di Bawah Pemanggilan Fungsi `addTwoNums`

Tambahkan baris kode lain yang mencatat konsol string `"It still works"`.