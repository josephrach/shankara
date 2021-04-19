// mengambil elemen tombol
const tombolCustom = document.getElementsByClassName('menu_beranda');
const tombolBeranda = document.getElementsByClassName('menu_custom');
// akhit mengambil elemen tombol
// mengambil halamannya

 var halamanCustom = document.getElementsByClassName('bagian_konten');
 var halamanBeranda = document.getElementsByClassName('bagian_konten2');
 
// akhir mengambil halamannya

// membuat fungsi geser halamannya
function geserHalamanBeranda() {
  halamanCustom[0].classList.add('geserKanan');
  halamanCustom[0].classList.remove('geserKiri');
  tombolCustom[0].classList.add('garisBawah');
  halamanBeranda[0].classList.add('geserKiri');
  halamanBeranda[0].classList.remove('geserKanan');
  tombolBeranda[0].classList.remove('garisBawah');
  return halamanCustom,halamanBeranda;
}
function geserHalamanCustom(){
  halamanCustom[0].classList.remove('geserKanan');
  halamanCustom[0].classList.add('geserKiri');
  tombolCustom[0].classList.remove('garisBawah');
  halamanBeranda[0].classList.remove('geserKiri');
  halamanBeranda[0].classList.add('geserKanan');
  tombolBeranda[0].classList.add('garisBawah');
  return halamanCustom,halamanBeranda;
}
// akhir membuat fungsi geser halamannya

// menambahkan event ke dalam tombol
tombolCustom[0].setAttribute('onclick','geserHalamanBeranda()');
tombolBeranda[0].setAttribute('onclick','geserHalamanCustom()');
// akhit menambahkan event ke dalam tombol

