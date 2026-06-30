# Rekursi: Menghitung Deret Fibonacci

## Pengantar

Rekursi adalah konsep dasar dalam ilmu komputer dan pemrograman di mana sebuah fungsi memanggil dirinya sendiri untuk menyelesaikan masalah. Konsep ini sangat berguna untuk masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil dan serupa, seperti menghitung deret Fibonacci.

Di lab ini, Anda akan belajar cara menulis solusi rekursif untuk menghitung deret Fibonacci. Anda akan menjelajahi konsep inti rekursi, termasuk kasus dasar dan kasus rekursif, dan memahami cara menggabungkannya secara efektif untuk menyelesaikan masalah.

## Tujuan

Tujuan lab ini adalah untuk memahami dan mengimplementasikan fungsi rekursif yang menghitung angka Fibonacci ke-n menggunakan kasus basis dan rekursif.

## Sasaran

- Memahami deret Fibonacci dan definisi rekursifnya.
- Mempelajari perbedaan antara kasus dasar dan kasus rekursif.
- Menerapkan fungsi rekursif untuk menghitung deret Fibonacci.
- Menganalisis dan mendiskusikan efisiensi solusi rekursif.

## Petunjuk untuk Pelajar

### Bagian 1: Memahami Masalah

1.  **Langkah 1:** Buka file `recursive_fibonacci.js` yang terletak di folder `Recursive-fibonacci`. File ini berisi implementasi awal dari fungsi Fibonacci dan placeholder untuk pekerjaan selanjutnya.
2.  **Langkah 2:** Tinjau komentar yang disediakan di dalam file. Komentar-komentar ini menjelaskan tujuan dari deret Fibonacci, konsep rekursi, dan perbedaan antara kasus basis dan rekursif.

### Bagian 2: Menulis Fungsi Rekursif

**Langkah 1:** Pahami kasus dasar dan kasus rekursif.

#### 1. Kasus Basis

Kasus dasar adalah kondisi dalam fungsi rekursif yang menghentikan rekursi. Ini merupakan yang paling sederhana, di mana jawabannya sudah diketahui dan dapat dikembalikan tanpa melakukan pemanggilan rekursif lebih lanjut.

Untuk Fibonacci, kasus dasarnya adalah:

- `fib(0) = 0` : Ketika `n = 0`, angka Fibonacci adalah 0.
- `fib(1) = 1` : Ketika `n = 1`, angka Fibonacci adalah 1.

#### 2. Kasus Rekursif

Kasus rekursif adalah bagian dari fungsi yang mendefinisikan bagaimana masalah dipecah menjadi sub-masalah yang lebih kecil dan serupa. Ini melibatkan pemanggilan fungsi itu sendiri dengan input yang lebih kecil, bergerak lebih dekat ke kasus dasar dengan setiap panggilan. Hal ini memastikan masalah pada akhirnya diselesaikan melalui serangkaian langkah yang lebih kecil dan mudah dikelola.

Untuk Fibonacci, kasus rekursif mengikuti rumus:
```text
fib(n) = fib(n-1) + fib(n-2)
```


Ini berarti untuk menghitung `fib(n)`, Anda membutuhkan jumlah dari dua angka Fibonacci sebelumnya (`fib(n-1)` dan `fib(n-2)`).

## Solusi pada file 
Lihat file `index.js`
