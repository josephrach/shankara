// mengambil elemen tombol
const tombolBeranda = document.getElementsByClassName('menu_beranda');

// mengambil halamannya

 var halamanBeranda = document.getElementsByClassName('bagian_konten');
 var halamanCustom = document.getElementsByClassName('bagian_konten2');
 



// membuat fungsi geser halamannya
function geserHalamanBeranda() {
  halamanBeranda.setAttribute('class','geserKanan');
  halamanCustom.setAttribute('class','geserKiri');
  return halamanBeranda,halamanCustom;
}


// menambahkan event ke dalam tombol
// tombolBeranda.;
tombolBeranda.setAttribute('onclick','geserHalamanBeranda()')


