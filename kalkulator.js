class Kalkulator {
	constructor(angka1, angka2) {
		this.hasil = 0;
		this.angka1 = angka1;
		this.angka2 = angka2;
	}

	tambah(){
		return this.angka1 + this.angka2;
	}

	kurang(){
		return this.angka1 - this.angka2;
	}

	kali(){
		return this.angka1 * this.angka2;
	}

	bagi(){
		this.hasil = this.angka1 / this.angka2;
	}
}

const angka1 = 2;
const angka2 = 3;
const kalkulator = new Kalkulator(angka1, angka2);

console.log(kalkulator.tambah());
console.log(kalkulator.kurang());
console.log(kalkulator.kali());
kalkulator.angka1 = 6;
kalkulator.angka2 = 2;
kalkulator.bagi();
console.log(kalkulator.hasil);
