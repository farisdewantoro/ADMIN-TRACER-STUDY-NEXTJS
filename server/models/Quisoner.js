class Quisoner{
    constructor(){
        this.insertQuisoner = `INSERT INTO quisoner set ? `;
        this.insertQ_pertanyaan = `INSERT INTO q_pertanyaan (quisoner_id,kode,pertanyaan) values ? `;
        this.insertQ_jawaban = `INSERT INTO q_jawaban (q_pertanyaan_id,kode,jawaban,additional) values ? `;

        this.selectQuisoner = `SELECT * from quisoner`;
        this.selectQ_user = `SELECT m.nama,m.nrp from q_user as qu 
        left join mahasiswa as m on qu.mahasiswa_id = m.id`;
    }
}

module.exports = Quisoner;