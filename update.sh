#!/bin/bash

# Pastikan Git menganggap folder ini aman (opsional untuk memori internal Android)
git config --global --add safe.directory $(pwd)

echo "🔄 Memulai proses update ke GitHub..."

# 1. Menambahkan semua perubahan file
git add .

# 2. Membuat pesan commit otomatis dengan tanggal dan jam saat ini
waktu=$(date "+%Y-%m-%d %H:%M:%S")
git commit -m "Update otomatis pada $waktu"

# 3. Mengirimkan file ke GitHub
echo "🚀 Mengunggah file ke branch master..."
git push origin master

echo "✅ Selesai! Perubahan Anda sedang diproses oleh GitHub Pages."

