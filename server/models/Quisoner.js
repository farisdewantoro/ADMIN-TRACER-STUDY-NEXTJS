class Quisoner{
    constructor(){
        this.insertQuisoner = `INSERT INTO quisoner set ? `;
        this.insertQ_pertanyaan = `INSERT INTO q_pertanyaan (quisoner_id,kode,pertanyaan) values ? `;
        this.insertQ_jawaban = `INSERT INTO q_jawaban (q_pertanyaan_id,kode,jawaban,additional) values ? `;

        this.selectQuisoner = `SELECT * from quisoner`;
    }
}

module.exports = Quisoner;