# Latihan Defensive Programming (Pemrograman Defensif)

Pemrograman defensif adalah tentang berasumsi bahwa semua argumen yang diterima sebuah fungsi memiliki tipe yang salah, nilai yang salah, atau keduanya.

Dengan kata lain, kamu berasumsi bahwa sesuatu akan berjalan tidak sesuai rencana dan kamu bersikap proaktif dalam memikirkan skenario tersebut sebelum terjadi, sehingga fungsi yang kamu buat tidak mudah menyebabkan error karena masukan yang salah.

## Kriteria Validasi
Untuk latihan ini, kedua argumen yang diberikan ke fungsi harus memenuhi kriteria berikut:

- Panjang parameter `word` tidak boleh kurang dari 2.
- Panjang parameter `match` harus 1.
- Tipe dari kedua parameter `word` dan `match` harus berupa string.

## Kode yang akan di refactor

```javascript
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

```

## Pengujian

#### Uji Gagal (Failling Test)
```javascript
letterFinder(1, 2);
// Output: "Please pass correct arguments to the function."
```

#### Uji Berhasil (Passing Test)
```javascript
letterFinder("cat", "c");
// Output:
// Found the c at 0
// ---No match found at 1
// ---No match found at 2
```

## Penjelasan Langkah Refactoring
1. Mendeklarasikan variabel `condition1` berisi `typeof(word) == 'string' && word.length >= 2` tepat di atas perulangan `for`.
2. Mendeklarasikan variabel `condition2` berisi `typeof(match) == 'string' && match.length == 1`.
3. Membuat blok `if` yang memeriksa apakah `condition1` dan `condition2` bernilai `true`.
4. Memindahkan seluruh isi perulangan (loop) ke dalam blok `if` tersebut.
5. Membuat blok `else` yang menampilkan `"Please pass correct arguments to the function."` jika kondisi tidak terpenuhi.
6. Melakukan uji gagal dengan memanggil `letterFinder(1, 2)`.
7. Melakukan uji berhasil dengan memanggil `letterFinder("cat", "c")`.