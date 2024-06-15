// const { log } = require("console");
const contacts = require("./contact");
// const { log } = require("console");
// const { argv } = require("process");
// const { types } = require("util");
const yargs = require("yargs");

// Menambahkan kontak
yargs
  .command({
    command: "add",
    describe: "menambahkan contact",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: "string",
      },
      noHP: {
        describe: "Nomor Hanphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

  
  // Menampilkan Daftar swmua contact
yargs.command({
  command: "list",
  describe: "menampilkan daftar contact",
  handler() {
    contacts.listContact();
  },
});

// Menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});
// Menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "menanghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});

yargs.parse();

// const main = async () => {
//   const nama = await contacts.tulisPertayaan("Masukan nama anda: ");
//   const email = await contacts.tulisPertayaan("Masukan email anda: ");
//   const noHp = await contacts.tulisPertayaan("Masukan nomor Hp anda: ");

//   contacts.simpanContact(nama, email, noHp);
// };

// main();
