# Latihan: Mempraktikkan Pernyataan Bersyarat

## Pengantar

Dalam latihan ini, Anda akan berlatih bekerja dengan pernyataan `if else`. Pada akhir latihan ini, Anda akan dapat menulis pernyataan `if else` yang menentukan sumber pendapatan Anda berdasarkan usia Anda. Anda juga akan dapat menulis pernyataan `switch` yang menentukan rutinitas malam Anda berdasarkan hari dalam seminggu.

---

## Pedoman

Saat menulis kode JavaScript, penting untuk memeriksa kesalahan sintaksis umum yang dapat mencegah program berjalan dengan benar. Kesalahan-kesalahan utama yang harus dihindari meliputi:

- **Tanda Kurung yang hilang**: Selalu pastikan tanda kurung ditempatkan dengan benar di sekitar kondisi dalam pernyataan `if`, `else`, dan `switch`.
- **Kurung Kurawal yang Tidak Cocok**: Pastikan setiap pembuka `{` memiliki penutup `}` yang sesuai untuk mendefinisikan blok kode dengan benar.
- **Titik Koma Ekstra**: Hindari menempatkan titik koma setelah kondisi `if`, `else`, atau `else if` karena akan mengakhiri pernyataan sebelum waktunya.
- **Penggunaan Operator yang Salah**: Periksa kembali operator logika (`&&`, `||`, dll.) dan operator perbandingan (`>`, `<`, `==`) untuk sintaks yang benar.
- **Penggunaan Kata Kunci yang Tidak Tepat**: Pastikan penggunaan kata kunci `var` dengan benar untuk deklarasi variabel.

---

## Langkah-Langkah

### Bagian 1: Apakah Anda Sudah Cukup Umur?

1. Deklarasikan variabel `age` menggunakan kata kunci `var` dan setel ke angka `10`.

2. Tambahkan pernyataan `if` yang memeriksa apakah nilai variabel `age` lebih besar atau sama dengan angka `65`. Di dalam blok `if`, `console.log` kalimat: `"You get your income from your pension"`.

3. Tambahkan `else if`, di mana Anda akan memeriksa apakah nilai usia kurang dari `65` dan lebih besar dari atau sama dengan `18`. Di dalam blok `else if` ini, ketik `console.log` dan kemudian `"Each month you get a salary"`.

4. Tambahkan `else if` lainnya, dan kali ini periksa apakah nilai usia di bawah `18`. Di dalam blok `else if`, `console.log` kalimat: `"You get an allowance"`.

5. Tambahkan pernyataan `else` untuk menangkap nilai lainnya. Di dalam blok tersebut, ketik `console.log` dan kemudian `"The value of age variable is not numerical"`.

6. Coba sesuaikan usia dan jalankan program untuk melihat bagaimana pengaruhnya terhadap output.

---

### Bagian 2: Kode Program Hari dalam Seminggu sebagai Pernyataan Switch

1. Pada baris berikutnya, tentukan variabel baru, beri nama `day`, dan atur nilainya menjadi `"Sunday"`.

2. Mulailah mengkodekan pernyataan `switch`, dengan mengoper variabel `day` sebagai ekspresi yang akan dievaluasi.

3. Di dalam `switch`, tambahkan kasus untuk setiap hari dalam seminggu, dimulai dengan `"Monday"`, dan diakhiri dengan `"Sunday"`. Pastikan untuk menggunakan nilai string untuk hari. Di dalam setiap kasus, untuk saat ini, cukup tambahkan `console.log('Do something')`, dan tambahkan `break;` pada baris di bawah ini.

4. Pada bagian paling bawah dari pernyataan `switch`, tambahkan case `default` dan tambahkan `console.log('There is no such day')`.

5. Terakhir, perbarui panggilan `console.log` untuk setiap kasus, berdasarkan aktivitas apa pun yang Anda lakukan pada setiap hari.

---

## Tips

- Jika Anda perlu memastikan bahwa beberapa kondisi bernilai benar dalam pernyataan `if`, Anda dapat melakukannya dengan menggunakan operator `&&`.
- Dalam JavaScript, sintaks yang benar untuk operator "lebih besar dari atau sama dengan" adalah: `>=`.
- Jangan lupa untuk menambahkan `break` di akhir setiap kasus dalam pernyataan `switch`.