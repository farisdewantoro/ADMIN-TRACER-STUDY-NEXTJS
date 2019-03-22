class Mahasiswa{
    constructor(){
        this.Login = `SELECT * from mahasiswa as m where m.nrp = ? and m.kodePIN = ? `;
    }
}

module.exports = Mahasiswa;




