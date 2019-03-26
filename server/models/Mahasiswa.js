class Mahasiswa{
    constructor(){
        this.Login = `SELECT * from mahasiswa as m where m.nrp = ? and m.kodePIN = ? `;
        this.InsertMahasiswa = `INSERT into mahasiswa set ? `;
        this.InsertLulusan = `INSERT INTO lulusan set ? `;
        this.SelectWithJurusan = `SELECT 
        m.id,
        m.nrp,
        m.nama,
        m.email,
        m.jurusan_id,
        m.alamat,
        m.noTelepon,
        m.kodePIN,
        l.ipk,
        l.lamaTA,
        l.judulTA,
        l.tanggalLulus,
        j.nama as jurusan,
        j.prodi
        from mahasiswa as m 
        left join lulusan as l on m.id = l.mahasiswa_id
        left join jurusan as j on m.jurusan_id = j.id
        group by
        m.id,
        m.nrp,
        m.nama,
        m.email,
        m.jurusan_id,
        m.alamat,
        m.noTelepon,
        m.kodePIN,
        l.ipk,
        l.lamaTA,
        l.judulTA,
        l.tanggalLulus,
        j.nama,
        j.prodi
        order by m.created_at desc`;
    }
}

module.exports = Mahasiswa;




