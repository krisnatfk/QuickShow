# QuickShow

QuickShow adalah aplikasi full-stack modern yang dibangun menggunakan React (Vite) untuk antarmuka pengguna dan Node.js (Express) untuk backend endpoint. Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang cepat dan responsif dalam menampilkan dan mengelola media, dilengkapi dengan fitur autentikasi aman, manajemen media, serta pemrosesan di latar belakang.

## 🚀 Fitur Utama
- **Frontend Modern & Cepat**: Dibangun dengan React 19 dan Vite untuk performa optimal.
- **Desain Responsif**: Menggunakan Tailwind CSS untuk antarmuka yang indah dan mendukung segala ukuran layar.
- **Backend Handal**: Express.js REST API dengan sistem database NoSQL MongoDB (menggunakan Mongoose).
- **Autentikasi Aman**: Integrasi dengan Clerk untuk manajemen user dan autentikasi yang *seamless*.
- **Manajemen Media**: Menggunakan Cloudinary untuk penyimpanan dan optimalisasi pengiriman gambar/video.
- **Background Jobs**: Terintegrasi dengan Inngest untuk menangani antrean proses atau pemrosesan latar belakang dengan handal.

## 🛠️ Teknologi yang Digunakan
- **Frontend**: React, Vite, Tailwind CSS, React Router DOM, React Player, Lucide React
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), Clerk SDK, Cloudinary, Inngest
- **Tools Tambahan**: Axios (HTTP Client), ESLint, Hot Toast (Notifications)

## 💻 Cara Install & Menjalankan Project (Tutorial Cloning)

Ikuti langkah-langkah di bawah ini untuk menjalankan project QuickShow di komputer Anda (Local Environment).

### 1. Clone Repository
Buka terminal/Command Prompt dan jalankan perintah berikut untuk meng-clone project ini:
```bash
git clone https://github.com/krisnatfk/QuickShow.git
cd QuickShow
```

### 2. Setup Server (Backend)
Buka terminal baru untuk mengatur bagian backend, kemudian pindah ke direktori server:
```bash
cd server
```

Install seluruh *dependencies* yang dibutuhkan:
```bash
npm install
```

Siapkan environment variables. Pastikan ada file `.env` di dalam folder `server` yang berisi konfigurasi utama seperti:
- URL Koneksi MongoDB
- Keys untuk Clerk Auth
- Keys API Cloudinary

Jalankan backend server:
```bash
npm run server
```
*(Server backend akan berjalan dan menggunakan `nodemon` sehingga otomatis merestart jika ada perubahan kode).*

### 3. Setup Client (Frontend)
Buka terminal baru untuk mengatur bagian frontend, lalu masuk ke direktori `cleint`:
```bash
cd cleint
```

Install seluruh *dependencies*:
```bash
npm install
```

(Opsional) Pastikan ada file `.env` jika terdapat *environment variable* khusus untuk frontend.

Jalankan aplikasi frontend:
```bash
npm run dev
```

### 4. Mulai Eksplorasi!
Setelah aplikasi frontend berjalan, Vite biasanya akan memberikan URL lokal. Buka browser Anda dan kunjungi:
```text
http://localhost:5173
```
Project QuickShow sekarang sudah berjalan di mesin lokal Anda! 🎉

---
> *Dokumentasi ini dibuat untuk melengkapi detail project pada portofolio.*
