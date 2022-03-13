var objek = "";
document.write(
  "Menurut KBBI kata objek atau obyek berarti sesuatu dapat berupa benda, orang, atau apapun yang menjadi pokok pembicaraan.",
  "<br>",
  " Kata ini juga dapat berarti sesuatu (benda/orang) yang dijadikan sasaran untuk diteliti.",
  objek,
  "<br>",
  "<br>"
);

var les = {
  pelajaran: "Programmer",
  time: "09:00-10:45 / 13:00-15:00",
  dosen: "Algis Al Kausar",
  mobile: function () {
    return "20jt/bln";
  },
  frontend: function () {
    return "23jt/bln";
  },
  backend: function () {
    return "25jt/bln";
  },
  nowa: "082125055567",
};

document.write(" Les ", les, "<br>", "<br>");
document.write("Pelajaran : ", les.pelajaran, "<br>");
document.write("Waktu : ", les.time, "<br>");
document.write("Dosen : ", les.dosen, "<br>");
document.write("Mobile Developer : ", les.mobile(), "<br>");
document.write("Front End Developer : ", les.frontend(), "<br>");
document.write("Back End Developer : ", les.backend(), "<br>");
document.write("Hub : ", les.nowa, "<br>");
document.write("<br>");

var sewa = {
  bus: "BudiMen",
  tujuan: "Yogya - Bandung",
  fasilitas: "Full AC + Wi-Fi + WC ",
  sopir: "Ahmad Novan Zulkarnaen",
  miniBus: function () {
    return "1jt 24jam";
  },
  bigBus: function () {
    return "1,5jt 24jam";
  },
  tlp: "085652438900",
};

document.write("Sewa Bus Parawisata ", sewa, "<br>", "<br>");
document.write("Jenis Bus : ", sewa.bus, "<br>");
document.write("Tujuan : ", sewa.tujuan, "<br>");
document.write("Fasilitas : ", sewa.fasilitas, "<br>");
document.write("Sopir : ", sewa.sopir, "<br>");
document.write("Mini Bus : ", sewa.miniBus(), "<br>");
document.write("Big Bus : ", sewa.bigBus(), "<br>");
document.write("Hub : ", sewa.tlp, "<br>");
document.write("<br>");

var lampu = {
  brand: "Skin Head",
  berat: "210 gram",
  power: "10 Watt",
  voltage: "220v",
  warna: function () {
    return "white & warmwhite";
  },
  warna1: function () {
    return "white & light blue";
  },
};

document.write("Lampu Taman ", lampu, "<br>", "<br>");
document.write("Brand : ", lampu.brand, "<br>");
document.write("Berat : ", lampu.berat, "<br>");
document.write("Power : ", lampu.power, "<br>");
document.write("Voltage : ", lampu.voltage, "<br>");
document.write("Warna Cahaya : ", lampu.warna(), "<br>");
document.write("Warna Cahaya: ", lampu.warna1(), "<br>");
document.write("<br>");

var angkringan = {
  menu: "Ote-ote + Teh Young",
  harga: "14k",
  Koki: "SpongBob SquarePants",
  diBeli: function () {
    return "Kenyang";
  },
  gakDiBeli: function () {
    return "Pengen";
  },
};

document.write("Angkringan Kraby ", angkringan, "<br>", "<br>");
document.write("Menu : ", angkringan.menu, "<br>");
document.write("Harga : ", angkringan.harga, "<br>");
document.write("Koki : ", angkringan.Koki, "<br>");
document.write("Di beli : ", angkringan.diBeli(), "<br>");
document.write("Gak di beli : ", angkringan.gakDiBeli(), "<br>");
document.write("<br>");

var kursus = {
  kendaraan: "Mobil / Kereta / Pesawat",
  waktu: "08:00-16:00",
  mobil: function () {
    return "300k / bln (sampai lancar)";
  },
  kereta: function () {
    return "500k / bln (sampai kepake)";
  },
  pesawat: function () {
    return "1jt / bln (sampai di akui)";
  },
  nowa1: "08221567894",
};

document.write("Kursus ", kursus, "<br>", "<br>");
document.write("Kendaraan : ", kursus.kendaraan, "<br>");
document.write("Waktu : ", kursus.waktu, "<br>");
document.write("Mobil : ", kursus.mobil(), "<br>");
document.write("Kereta : ", kursus.kereta(), "<br>");
document.write("Pesawat : ", kursus.pesawat(), "<br>");
document.write("Hub : ", kursus.nowa1, "<br>");
document.write("<br>");

// function RumahMakan(menu, koki, harga, makan, gakMakan) {
//   this.menu = menu;
//   this.koki = koki;
//   this.harga = harga;
//   this.makan = makan;
//   this.gakMakan = gakMakan;
// }
// var menuSpecial = new RumahMakan(
//   "Teh young",
//   "Izra",
//   "4500",
//   "kenyang",
//   "pengen"
// );
