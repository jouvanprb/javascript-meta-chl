# Unit Testing dengan Jest

## 📝 Deskripsi
Ini merupakan unit test menggunakan **Jest**, sebuah framework testing untuk JavaScript. Kita akan menguji sebuah fungsi sederhana `timesTwo` untuk memahami konsep dasar testing seperti test suite, test case, dan assertion.

## 📂 Struktur File
```asci
project/
├── timesTwo.js # File fungsi yang akan diuji
└── timesTwo.test.js # File unit test (Jest)
```

## 🚀 Instalasi & Setup Jest

### **Step 1: Pastikan Node.js Terinstal**
```bash
node -v && npm -v
```

### **Step 2: Inisialisasi Project**
```bash
npm init -y
```
Perintah ini membuat file package.json untuk mengelola dependencies project.

### **Step 3: Install Jest**
```bash
npm install jest --save-dev
```
- Flag --save-dev artinya Jest hanya dipakai saat development, bukan production.
- Setelah terinstall, Jest akan muncul di devDependencies pada package.json.

### **Step 4: Mengkonfigurasi package.json**
```json
"scripts": {
    "test": "jest"
}
```
Dapat di configurasi sendiri pada `value JSON` menjadi seperti dibawah ini:

#### 📊 Perbandingan Command

| Command | Hasil |
|---------|-------|
| `jest` | Output teks PASS/FAIL di terminal |
| `jest --json` | Output JSON di terminal (tidak tersimpan) |
| `jest --json --outputFile=hasil.json` | Output JSON tersimpan di file |
| `jest --coverage` | Tabel coverage di terminal + folder `coverage/` |
| `jest --coverage --coverageReporters='json-summary'` | JSON summary coverage di terminal |
| `jest --json --outputFile=hasil.json --coverage --coverageReporters='json-summary'` | JSON + coverage summary tersimpan di file |

### **Step 5: Menjalankan Test**
```bash
npm test
```

## 🔍 Analisis Kode Test  pada Jest

### 1. Import Modul yang Akan Diuji
```javascript
const timesTwo = require('./timesTwo');
```

- require() adalah cara Node.js mengimpor modul dari file lain.
- Disini kita mengimpor fungsi timesTwo agar bisa diuji.


### 2. Membuat Test Suite dengan describe()
```javascript
describe('timesTwo', () => {
    // test cases di dalam sini
});
```

Penjelasan: 

| Bagian | Keterangan |
|---------|------------|
| `describe(nama, fn)` | Mengelompokkan beberapa test case dalam satu grup |
| `'timesTwo'` | Nama test suite (biasanya nama fungsi/modul yang diuji) |
| `() => { ... }` | Callback berisi kumpulan test case yang akan dijalankan |


### 3. Membuat Test Case dengan test()
```javascript
test('multiples by 2 when no second parameter', () => {
    expect(timesTwo(10)).toBe(20);
    expect(timesTwo(7)).toBe(14);
});
```

Penjelasan :

| Bagian | Keterangan |
|---------|------------|
| `test(deskripsi, fn)` | Mendefinisikan satu unit test |
| `'multiplies by 2...'` | Deskripsi apa yang diuji (akan muncul di output) |
| `() => { ... }` | Callback berisi logika pengujian |


### 4. Assertion dengan expect() dan Matcher toBe()
```javascript
expect(timesTwo(10)).toBe(20);
```

Struktur test jest:
```text
expect(nilaiYangDiuji).matcher(nilaiYangDiharapkan);
```

Penjelasan :

| Bagian | Keterangan |
|---------|------------|
| `expect()` | Membungkus nilai yang akan diuji |
| `.toBe()` | Matcher - membandingkan dengan strict equality (===) |
| `20` | Nilai yang diharapkan (expected value) |


## 📊 Memahami Output Jest di Terminal
Saat menjalankan npm test, kita akan melihat output seperti ini:

### Output terminal untuk test yang berhasil dijalankan
![Jest Terminal Output](/img/jestTerminal.avif)

Penjelasan :

| Baris Output | Arti |
|--------------|------|
| `PASS` | Semua test lulus |
| `✓` | Tanda centang = test case berhasil |
| `(2 ms)` | Waktu eksekusi test case |
| `Test Suites: 1` | Jumlah file test yang dijalankan |
| `Tests: 2` | Jumlah total test case |


### Output dokumentasi Browser
Dengan menambahkan `coverage` pada value JSON maka akan muncul satu folder baru yaitu coverage. Disini ada 1 file yang `coverage/icov-report/index.html` yang dapat kita manfaatkan untuk melihat output dari pada unit test yang kita jalankan

```bash
xdg-open coverage/lcov-report/index.html
```

Jalankan pada terminal command tersebut dan akan muncul output `Opening in existing browser session.`

Unit Test pada browser akan tampak seperti gambar berikut:

![Jest Browser](/img/jestBrowser.avif)


