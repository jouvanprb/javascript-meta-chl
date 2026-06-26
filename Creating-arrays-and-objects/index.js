// Solution

// Membuat array kosong dan menetapkan ke variabel clothes
const clothes = [];

// Menambahkan 5 item pakaian favorit menggunakan push()
clothes.push("Kemeja Putih");
clothes.push("Celana Jeans");
clothes.push("Jaket Denim");
clothes.push("Kaos Polos");
clothes.push("Sepatu Sneakers");

// Menghapus pakaian kelima menggunakan pop()
clothes.pop();

// Menambahkan item pakaian baru menggunakan push()
clothes.push("Sweater Rajut");

// Menampilkan item ketiga dari array clothes
console.log("Item ketiga dari clothes:", clothes[2]);

// Membuat objek kosong untuk favCar
const favCar = {};

// Menetapkan properti color menggunakan notasi titik
favCar.color = "Merah Maroon";

// Menetapkan properti convertible menggunakan notasi titik
favCar.convertible = false;

// Menampilkan seluruh objek favCar
console.log("Objek favCar:", favCar);