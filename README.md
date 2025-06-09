# 📚 Book Shelf API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![Hapi.js](https://img.shields.io/badge/Hapi.js-21.x-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Linted](https://img.shields.io/badge/Code%20Style-ESLint-informational)

Book Shelf API adalah RESTful API sederhana untuk mengelola data buku. API ini dibuat menggunakan framework [@hapi/hapi](https://hapi.dev/) dan menyimpan data secara sementara (in-memory).

---

## 🚀 Fitur

- Menambahkan buku baru
- Mengambil daftar seluruh buku
- Mencari buku berdasarkan nama, status membaca, atau status selesai
- Mengambil detail buku berdasarkan ID
- Memperbarui data buku berdasarkan ID
- Menghapus buku berdasarkan ID

---

## 🛠️ Teknologi

- Node.js
- @hapi/hapi
- nanoid
- ESLint (linting)

---

## 📦 Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/kamaldev10/bookshelf-api.git
   cd bookshelf-api
   ```

---

## 📂 Struktur Direktori

```bash
bookshelf-api/
├── src/
│ ├── server.js # Entry point server Hapi
│ ├── routes.js # Definisi semua endpoint
│ ├── handler.js # Handler untuk logika endpoint
│ └── books.js # Data buku disimpan sementara di sini
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

---

## 📬 Dokumentasi API (Routing)

| Method   | Endpoint          | Deskripsi                                            |
| -------- | ----------------- | ---------------------------------------------------- |
| `POST`   | `/books`          | Menambahkan buku baru                                |
| `GET`    | `/books`          | Mengambil seluruh buku (dapat difilter dengan query) |
| `GET`    | `/books/{bookId}` | Mengambil detail buku berdasarkan ID                 |
| `PUT`    | `/books/{bookId}` | Memperbarui data buku                                |
| `DELETE` | `/books/{bookId}` | Menghapus buku berdasarkan ID                        |

---

## 🔍 Query Parameters untuk GET /books

| Parameter  | Tipe                  | Deskripsi                                 |
| ---------- | --------------------- | ----------------------------------------- |
| `name`     | string                | Filter berdasarkan nama (contains search) |
| `reading`  | number (`0` atau `1`) | Filter berdasarkan status sedang dibaca   |
| `finished` | number (`0` atau `1`) | Filter berdasarkan status selesai dibaca  |

---

## 🧾 Contoh JSON Tambah Buku

```JSON
{
  "name": "Atomic Habits",
  "year": 2018,
  "author": "James Clear",
  "summary": "Panduan membangun kebiasaan positif",
  "publisher": "Penguin",
  "pageCount": 320,
  "readPage": 100,
  "reading": true
}
```

---

## 🚫 Validasi

| Kasus                            | Kode | Pesan                                             |
| -------------------------------- | ---- | ------------------------------------------------- |
| Nama kosong                      | 400  | `Gagal menambahkan buku. Mohon isi nama buku`     |
| `readPage > pageCount`           | 400  | `readPage tidak boleh lebih besar dari pageCount` |
| Buku tidak ditemukan             | 404  | `Buku tidak ditemukan / Id tidak ditemukan`       |
| Gagal saat insert (error server) | 500  | `Buku gagal ditambahkan`                          |

---

## 🤝 Kontribusi

Kontribusi sangat terbuka!
Buka issue untuk bug, atau kirim pull request untuk perbaikan dan fitur tambahan.

<p align="center"> Dibuat dengan ❤️ oleh Kamaldev10 </p>
