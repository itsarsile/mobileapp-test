## A. Topik Komunikasi dengan Manajer Produk

1. Apakah teks yang lebih dari 3 baris harus dipotong tepat setelah 3 baris terakhir atau ada kebutuhan khusus dalam penentuan titik potong?

2. Apakah ada batasan jumlah upvotes, downvotes atau komentar yang dapat ditampilkan dihalaman? Jika iya, berapa jumlahnya?

3. Batasan teknis apa yang perlu diperhatikan dan dipertimbangkan dalam pengembangan fitur ini?

---
## B. Coding


Done:
- Memotong teks maksimal 3 baris dan menambahkan More diakhiran teks
- Membuat gambar layout sesuai dengan tinggi teks

Doing:

ada pada poin B penambahan logika, karena masih ada kebingungan mengenai apakah sinkronisasi diperlukan sebuah database?

---
## C1.
1. Struktur Data
	*Graph* dapat membantu memecahkan masalah untuk fitur ini. Dengan merepresentasikan node antara pengguna dengan node yang ingin direkomendasikan.
2. Apabila ada kondisi ekstrim seperti tidak adanya koneksi, kita bisa mendapatkan rekomendasi berdasarkan ketertarikan pengguna dengan cara menghitung interaksi post yang sering dilakukan oleh pengguna.
3. Jika banyaknya pengguna, kita dapat memangkas rekomendasi dengan cara mengutamakan dengan kesamaan yang tinggi.
4. Pengujian
	- Pengujian unit & integration dapat memastikan fitur berjalan dengan baik.
	- Pengujian A/B untuk mengukur efektivitasan fitur.


## C2 - Logika
1. Pengguna mendaftar  -> Menyajikan ketertarikan pengguna dengan memilih topik
2. Interaksi pengguna dengan konten -> menambahkan poin interaksi untuk mengkurasi konten berikutnya berdasarkan konteks konten tersebut (ex: konten memiliki tag "android", "development", "coding"). Maka, tag tersebut merepresentasikan 1 poin apabila pengguna berinteraksi dengan konten tersebut.
3. Sebaliknya, apabila pengguna dapat memilih "ketidak ketertarikan" atas konten tersebut maka poin berdasarkan (disini tag) "android", "development", "coding" maka dikurangkan sebanyak 1 poin juga.
