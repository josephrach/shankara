// mengambil elemen tombol
const tombolBeranda = document.getElementsByClassName('menu_beranda');
const tombolCustom = document.getElementsByClassName('menu_custom');

// mengambil halamannya

 var halamanBeranda = document.getElementsByClassName('bagian_konten');
 var halamanCustom = document.getElementsByClassName('bagian_konten2');
 


// membuat fungsi geser halamannya
function geserHalamanBeranda() {
  halamanBeranda[0].classList.add('geserKanan');
  halamanBeranda[0].classList.remove('geserKiri');
  tombolBeranda[0].classList.add('garisBawah');
  halamanCustom[0].classList.add('geserKiri');
  halamanCustom[0].classList.remove('geserKanan');
  tombolCustom[0].classList.remove('garisBawah');
  return halamanBeranda,halamanCustom;
}
function geserHalamanCustom(){
  halamanBeranda[0].classList.remove('geserKanan');
  halamanBeranda[0].classList.add('geserKiri');
  tombolBeranda[0].classList.remove('garisBawah');
  halamanCustom[0].classList.remove('geserKiri');
  halamanCustom[0].classList.add('geserKanan');
  tombolCustom[0].classList.add('garisBawah');
  return halamanBeranda,halamanCustom;
}

// menambahkan event ke dalam tombol
tombolBeranda[0].setAttribute('onclick','geserHalamanBeranda()');
tombolCustom[0].setAttribute('onclick','geserHalamanCustom()');


