function isi() {
    this.nama = `ucupt`;
    this.kelas = `12 iis a 07`;
    var sambung = () => {
        return `nama : ${this.nama} kelas : ${this.kelas}`;
    }
    console.log(sambung);
}

isi();