# Latihan: Fungsi Pencari Huruf

**Status:** Diterjemahkan secara otomatis dari Bahasa Inggris

## Deskripsi
Tugas dalam latihan ini adalah membuat sebuah fungsi yang dapat menerima sebuah kata dan menemukan posisi huruf yang dipilih di dalam kata tersebut.

> **Catatan:** Dalam JavaScript, string dapat diperlakukan mirip dengan array. Anda dapat mengakses setiap karakter dalam string menggunakan indeks, sama seperti array. Meskipun string tidak dideklarasikan secara eksplisit sebagai array, perilakunya serupa saat mengakses karakter berdasarkan indeks.

---

## Petunjuk Tugas

### Tugas 1: Membuat Fungsi
Tulis sebuah fungsi bernama `letterFinder` yang menerima dua parameter: `word` dan `match`.

### Tugas 2: Membuat Perulangan
Buatlah sebuah perulangan `for` di dalam badan fungsi. Pencacah perulangan harus dimulai dari nol, bertambah 1 pada setiap iterasi, dan terus berjalan selama nilai variabel pencacah kurang dari panjang parameter `word`.

### Tugas 3: Mengakses dan Memeriksa Huruf
Di dalam perulangan `for`, gunakan variabel penghitung `i` untuk mengakses setiap huruf dari `word` dengan `word[i]`. Periksa apakah `word[i]` saat ini sama dengan nilai `match`.

### Tugas 4: Kondisi Jika Cocok
Jika huruf cocok, catat ke konsol:
```javascript
console.log('Found the', match, 'at', i)
```

### Tugas 5: Kondisi Else
Sekarang tulis kondisi `else`. Di sini Anda hanya akan mencatat konsol berikut ini:
```javascript
console.log('---No match found at', i)
```
ketika word[i] !== match.

> **Catatan**: Pernyataan else dijalankan jika kondisi if tidak terpenuhi. Gunakan untuk menangani situasi di mana huruf-hurufnya tidak cocok.


### Tugas 6: Memanggil Fungsi
Panggil fungsi `letterFinder` dan berikan argumen pertama sebagai string `"test"` dan argumen kedua, string `"t"`.

> **Catatan:** Untuk menjalankan fungsi, Anda akan memanggilnya dengan argumen tertentu. Di sini, Anda mengoper string `"test"` dan huruf `"t"` untuk melihat bagaimana fungsi bekerja.


## Keluaran yang Diharapkan

Keluaran Anda seharusnya adalah sebagai berikut:
Found the t at 0
```
---No match found at 1
---No match found at 2
Found the t at 3
```