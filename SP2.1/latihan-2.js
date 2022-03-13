var warung = {
  iklan: function () {
    document.write(
      `Bu , saya ${this.nama} , ngutang ${this.jenis} , harga ${this.harga} , dibayar bulan depan`
    );
  },
};

const promosi = Object.create(warung);

(promosi.nama = "Reza"),
  (promosi.jenis = "gorengan "),
  (promosi.harga = "5k"),
  promosi.iklan();
