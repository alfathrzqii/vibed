# Saintekfess Bot

Bot Telegram untuk mengirim pesan *confession* atau menfess secara anonim ke sebuah channel. Bot ini dibuat menggunakan Node.js, TypeScript, dan framework [grammY](https://grammy.dev/).

## Fitur
- Mengirim pesan anonim ke channel Telegram menggunakan perintah `/confess`.
- Menambahkan *hashtag* otomatis `#Saintekfess` pada setiap pesan yang dikirimkan.
- Dibangun menggunakan TypeScript untuk keamanan tipe (type-safety).

## Prasyarat
Sebelum menjalankan bot ini, pastikan Anda telah menginstal/memiliki:
- [Node.js](https://nodejs.org/) (disarankan versi LTS)
- npm (Node Package Manager)
- Token Bot Telegram (bisa didapatkan melalui [@BotFather](https://t.me/BotFather) di Telegram)
- ID Channel Telegram tujuan pengiriman *confess* (pastikan bot telah ditambahkan sebagai **Admin** di channel tersebut agar memiliki izin untuk mengirim pesan)

## Instalasi dan Persiapan

1. **Clone repositori** atau unduh *source code* ini, kemudian masuk ke direktori proyek:
   ```bash
   cd path/to/saintekfess-bot
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi *Environment Variables*:**
   - Ubah nama atau salin file `.env.example` menjadi `.env`:
     ```bash
     cp .env.example .env
     ```
   - Buka file `.env` dan isi token bot serta ID channel Anda sesuai dengan format:
     ```env
     BOT_TOKEN=token_bot_anda_di_sini
     CHANNEL_ID=id_channel_anda_di_sini
     ```

## Menjalankan Bot

Proyek ini menggunakan TypeScript dan *ES Modules*. Anda dapat menjalankan bot dengan dua mode:

### Mode Pengembangan (Development)
Untuk menjalankan bot dalam mode *development* (menggunakan `nodemon` agar bot secara otomatis me-restart ketika ada perubahan pada file TypeScript):
```bash
npm run dev
```

### Mode Produksi (Production)
Untuk menjalankan bot dalam tahap produksi, lakukan kompilasi *build* terlebih dahulu dari TypeScript ke JavaScript, kemudian jalankan file hasil kompilasi:
```bash
# 1. Melakukan build ke dalam direktori dist/
npm run build

# 2. Menjalankan bot dari file hasil build
npm start
```

## Daftar Perintah (Commands)
- `/start` - Menampilkan pesan sambutan dari bot dan petunjuk penggunaan.
- `/confess <pesan kamu>` - Mengirimkan pesan anonim ke channel yang telah dikonfigurasi. Contoh: `/confess halo ini dari seseorang`

## Teknologi yang Digunakan
- **Node.js** & **TypeScript**
- **grammY** (Telegram Bot API Framework)
- **dotenv** (untuk mengelola environment variables)
- **nodemon** & **ts-node** (untuk development)
