const fs = require('fs');
const readline = require('readline');

const FILE_PATH = 'barbie_dolls.json';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loadDatabase() {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(FILE_PATH));
}

function saveDatabase(data) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

function showMenu() {
    console.log('\n🎀 Selamat datang di Koleksi Barbie Dolls 🎀');
    console.log('1. Lihat koleksi Barbie');
    console.log('2. Tambah Barbie baru');
    console.log('3. Tampilkan detail Barbie');
    console.log('4. Ubah informasi Barbie');
    console.log('5. Hapus Barbie dari koleksi');
    console.log('6. Cari Barbie berdasarkan nama');
    console.log('7. Tampilkan Barbie terbaru');
    console.log('8. Tampilkan daftar tema Barbie');
    console.log('9. Keluar');
    rl.question('Pilih menu: ', handleMenu);
}

function handleMenu(choice) {
    switch (choice) {
        case '1':
            listBarbieDolls();
            break;
        case '2':
            addBarbie();
            break;
        case '3':
            showBarbieDetails();
            break;
        case '4':
            updateBarbie();
            break;
        case '5':
            removeBarbie();
            break;
        case '6':
            searchBarbie();
            break;
        case '7':
            showNewestBarbie();
            break;
        case '8':
            showThemes();
            break;
        case '9':
            console.log('Terima kasih telah menggunakan sistem ini!');
            rl.close();
            break;
        default:
            console.log('Pilihan tidak tersedia, coba lagi.');
            showMenu();
    }
}

function listBarbieDolls() {
    const data = loadDatabase();
    if (data.length === 0) {
        console.log('Koleksi Barbie masih kosong.');
    } else {
        console.log('\nDaftar Barbie dalam koleksi:');
        data.forEach((doll, index) => {
            console.log(`${index + 1}. ${doll.name} (${doll.year}) - ${doll.theme}`);
        });
    }
    showMenu();
}

function addBarbie() {
    rl.question('Nama Barbie: ', (name) => {
        rl.question('Tahun rilis: ', (year) => {
            rl.question('Tema/Kategori: ', (theme) => {
                const data = loadDatabase();
                data.push({ name, year, theme });
                saveDatabase(data);
                console.log(`${name} berhasil ditambahkan ke koleksi!`);
                showMenu();
            });
        });
    });
}

function showBarbieDetails() {
    rl.question('Masukkan nama Barbie yang ingin dilihat: ', (name) => {
        const data = loadDatabase();
        const doll = data.find(d => d.name.toLowerCase() === name.toLowerCase());
        if (doll) {
            console.log(`\n🩷 Detail Barbie 🩷`);
            console.log(`Nama: ${doll.name}`);
            console.log(`Tahun Rilis: ${doll.year}`);
            console.log(`Tema: ${doll.theme}`);
        } else {
            console.log('Barbie tidak ditemukan dalam koleksi.');
        }
        showMenu();
    });
}

function updateBarbie() {
    rl.question('Masukkan nama Barbie yang ingin diperbarui: ', (name) => {
        const data = loadDatabase();
        const dollIndex = data.findIndex(d => d.name.toLowerCase() === name.toLowerCase());
        if (dollIndex !== -1) {
            rl.question('Nama baru: ', (newName) => {
                rl.question('Tahun baru: ', (newYear) => {
                    rl.question('Tema baru: ', (newTheme) => {
                        data[dollIndex] = { name: newName, year: newYear, theme: newTheme };
                        saveDatabase(data);
                        console.log('Informasi Barbie diperbarui!');
                        showMenu();
                    });
                });
            });
        } else {
            console.log('Barbie tidak ditemukan.');
            showMenu();
        }
    });
}

function removeBarbie() {
    rl.question('Masukkan nama Barbie yang ingin dihapus: ', (name) => {
        let data = loadDatabase();
        const newData = data.filter(d => d.name.toLowerCase() !== name.toLowerCase());
        if (data.length !== newData.length) {
            saveDatabase(newData);
            console.log('Barbie berhasil dihapus dari koleksi.');
        } else {
            console.log('Barbie tidak ditemukan.');
        }
        showMenu();
    });
}

function searchBarbie() {
    rl.question('Masukkan kata kunci pencarian: ', (keyword) => {
        const data = loadDatabase();
        const results = data.filter(d => d.name.toLowerCase().includes(keyword.toLowerCase()));
        if (results.length > 0) {
            console.log('\n🎀 Hasil Pencarian 🎀');
            results.forEach((doll, index) => {
                console.log(`${index + 1}. ${doll.name} (${doll.year}) - ${doll.theme}`);
            });
        } else {
            console.log('Tidak ada Barbie yang cocok dengan pencarian.');
        }
        showMenu();
    });
}

function showNewestBarbie() {
    const data = loadDatabase();
    if (data.length === 0) {
        console.log('Koleksi Barbie masih kosong.');
    } else {
        const newest = data.reduce((a, b) => (a.year > b.year ? a : b));
        console.log('\n🆕 Barbie Terbaru 🆕');
        console.log(`Nama: ${newest.name}`);
        console.log(`Tahun Rilis: ${newest.year}`);
        console.log(`Tema: ${newest.theme}`);
    }
    showMenu();
}

function showThemes() {
    const data = loadDatabase();
    const themes = [...new Set(data.map(doll => doll.theme))];
    console.log('\n🎭 Daftar Tema Barbie 🎭');
    themes.forEach((theme, index) => {
        console.log(`${index + 1}. ${theme}`);
    });
    showMenu();
}

showMenu();
