var a = '';
var b = '';
var num = [];
var ans;

// Semua angka dan input operator akan disimpan dalam array "num" menggunakan function "sendNum()"
function sendNum(digit) {

	num.push(digit);

	if (num.length != 1) {
		a = '';
		document.getElementById('screen').innerHTML = a; // layar di bersihkan.
	}


	for (i = 0; i < num.length; i++) {

		a = a + num[i]; // menggabungkan elemen array "num" menjadi satu string, yang akan ditampilkan di layar

	}

	document.getElementById('screen').innerHTML = a; // menampilkan string yang digabungkan


}

// ketika pengguna menekan tombol sama dengan / "=", fungsi "equalTo()" dipanggil
function equalTo() {
	document.getElementById('screen').innerHTML = '';

	for (i = 0; i < num.length; i++) {

		b += num[i]; // menggabungkan array "num" menjadi satu string
	}

	ans = eval(b);

	document.getElementById('screen').innerHTML = ans; // Menampilkan Hasil

	while (num.length > 0) {
		num.pop(); // mengosongkan array "num"
	}

	num.push(ans.toString());


}


// Saat pengguna menekan tombol "AC", fungsi "clearScr()" dipanggil
function clearScr() {
	document.getElementById('screen').innerHTML = '';

	while (num.length > 0) {
		num.pop(); // mengosongkan array "num"
	}

	a = '';
	b = '';
}