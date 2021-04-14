// mengambil elemen tombol
const tombolBeranda = document.getElementsByClassName('menu_beranda');
const tombolCustom = document.getElementsByClassName('menu_custom');

// mengambil halamannya

 var halamanBeranda = document.getElementsByClassName('bagian_konten');
 var halamanCustom = document.getElementsByClassName('bagian_konten2');
 


// membuat fungsi geser halamannya
function geserHalamanBeranda() {
  halamanBeranda[0].classList.toggle('geserKanan');
  halamanBeranda[0].classList.toggle('geserKiri');
  tombolBeranda[0].classList.toggle('garisBawah');
  halamanCustom[0].classList.toggle('geserKiri');
  halamanCustom[0].classList.toggle('geserKanan');
  tombolCustom[0].classList.toggle('garisBawah');
  return halamanBeranda,halamanCustom;
}


// menambahkan event ke dalam tombol
tombolBeranda[0].setAttribute('onclick','geserHalamanBeranda()');
tombolCustom[0].setAttribute('onclick','geserHalamanBeranda()');


