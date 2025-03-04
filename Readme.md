# 🎀 Barbie Collection Manager - Simple Barbie Doll Organizer

Barbie Collection Manager adalah aplikasi berbasis CLI sederhana yang memungkinkan pengguna untuk mengelola koleksi Barbie mereka dengan mudah. Dengan menggunakan database berbasis JSON, pengguna dapat menambahkan, melihat, mencari, memperbarui, dan menghapus Barbie dalam daftar koleksi mereka.

## ✨ Fitur Utama
- 📌 **Melihat daftar Barbie** yang telah ditambahkan.
- ➕ **Menambahkan Barbie** baru dengan informasi nama, tema, dan tahun rilis.
- 🔍 **Mencari Barbie** berdasarkan kata kunci dalam nama.
- 📝 **Melihat detail Barbie** tertentu dalam daftar.
- ✏️ **Memperbarui informasi Barbie** yang sudah ada.
- ❌ **Menghapus Barbie** dari daftar koleksi.
- 🌟 **Tampilkan Barbie Terbaru** – Menampilkan Barbie dengan tahun rilis terbaru.
- 🎭 **Tampilkan Daftar Tema Barbie** – Menampilkan daftar tema unik dari Barbie yang telah ditambahkan.

## 🚀 Cara Menjalankan
### 1️⃣ Persyaratan
Pastikan Anda telah menginstal **Node.js** di sistem Anda.

### 2️⃣ Clone Repository
```sh
git clone https://github.com/username/barbie-collection.git
cd barbie-collection
```

### 3️⃣ Install Dependencies
```sh
npm install
```

### 4️⃣ Jalankan Program
```sh
node index.js
```

## 📚 Cara Penggunaan
Setelah program dijalankan, Anda akan melihat menu interaktif seperti berikut:
```
1. Lihat daftar Barbie
2. Tambah Barbie
3. Lihat detail Barbie
4. Perbarui Barbie
5. Hapus Barbie
6. Cari Barbie
7. Tampilkan Barbie Terbaru
8. Tampilkan Daftar Tema Barbie
9. Keluar
```
Masukkan angka sesuai opsi yang ingin dipilih.

### 🔧 Contoh Penggunaan
#### 🟢 Melihat Daftar Barbie
1. Pilih opsi `1. Lihat daftar Barbie`.
2. Program akan menampilkan semua Barbie yang telah ditambahkan.

#### ➕ Menambahkan Barbie
1. Pilih opsi `2. Tambah Barbie`.
2. Masukkan **nama Barbie**, **tema**, dan **tahun rilis**.
3. Barbie akan tersimpan dalam database.

#### 📝 Melihat Detail Barbie
1. Pilih opsi `3. Lihat detail Barbie`.
2. Masukkan **nama Barbie** yang ingin dilihat.
3. Program akan menampilkan informasi lengkap tentang Barbie tersebut.

#### ✏️ Memperbarui Barbie
1. Pilih opsi `4. Perbarui Barbie`.
2. Masukkan **nama Barbie** yang ingin diperbarui.
3. Masukkan data baru untuk Barbie tersebut.
4. Program akan memperbarui informasi dalam database.

#### ❌ Menghapus Barbie
1. Pilih opsi `5. Hapus Barbie`.
2. Masukkan **nama Barbie** yang ingin dihapus.
3. Program akan menghapus Barbie tersebut dari database.

#### 🔍 Mencari Barbie
1. Pilih opsi `6. Cari Barbie`.
2. Masukkan kata kunci untuk mencari nama Barbie.
3. Program akan menampilkan daftar Barbie yang sesuai dengan kata kunci tersebut.

#### 🌟 Tampilkan Barbie Terbaru
1. Pilih opsi `7. Tampilkan Barbie Terbaru`.
2. Program akan menampilkan Barbie dengan tahun rilis terbaru dalam koleksi.

#### 🎭 Tampilkan Daftar Tema Barbie
1. Pilih opsi `8. Tampilkan Daftar Tema Barbie`.
2. Program akan menampilkan daftar tema unik dari Barbie yang telah ditambahkan.

## 🛠 Teknologi yang Digunakan
- **Node.js** - Runtime JavaScript untuk backend.
- **JSON** - Sebagai database sederhana untuk menyimpan daftar Barbie.
- **Readline** - Modul untuk interaksi berbasis CLI.

## 📌 Struktur Proyek
```
/barbie-collection
│── data.json      # Database Barbie dalam format JSON
│── index.js       # File utama yang menjalankan aplikasi
│── package.json   # Konfigurasi dan dependensi proyek
│── README.md      # Dokumentasi proyek ini
```

## 📄 Lisensi
Proyek ini menggunakan lisensi **MIT**. Silakan gunakan, modifikasi, dan distribusikan dengan bebas.

🚀 Selamat mengelola koleksi Barbie Anda dengan mudah dan menyenangkan! 🎀💖

