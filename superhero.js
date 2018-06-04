class SuperHero {
	constructor(namaHero) {
		this.namaHero = namaHero;
		this.kekuatan = false;
	}

	menggunakanKekuatan() {
		return this.kekuatan = true;
	}

	tidakMenggunakanKekuatan() {
		return this.kekuatan = false;
	}
}

class Flash extends SuperHero {
	constructor(namaHero) {
		super(namaHero)
		this.berlari = false;
	}

	berlariCepat() {
		console.log(`${this.namaHero} Berlari Secepat Kilat !!`)
		this.berlari = true;
	}
}

class Superman extends SuperHero {
	constructor(namaHero) {
		super(namaHero)
		this.terbang = false;
	}

	terbangKeawan() {
		console.log(`${this.namaHero} Terbang Ke Awan !!`)
		this.terbang = true;
	}
}

const heroFlash = new Flash('The Flash')
const heroSuperman = new Superman('Superman')

heroFlash.berlariCepat() /*The Flash Berlari Secepat Kilat !!*/
heroSuperman.terbangKeawan() /*Superman Terbang Ke Awan !!*/

heroFlash.menggunakanKekuatan() /*true*/
heroSuperman.menggunakanKekuatan() /*true*/