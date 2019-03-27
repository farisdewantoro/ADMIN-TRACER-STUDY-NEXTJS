class Mahasiswa{
    constructor(){
        this.Login = `SELECT * from mahasiswa as m where m.nrp = ? and m.kodePIN = ? `;
        this.InsertMahasiswa = `INSERT into mahasiswa set ? `;
        this.InsertLulusan = `INSERT INTO lulusan set ? `;
        this.UpdateMahasiswa = `UPDATE mahasiswa set ? where nrp = ?`;
        this.UpdateLulusan = `UPDATE lulusan set ? where mahasiswa_id = ?`;

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
        this.deleteMahasiswa = `DELETE FROM mahasiswa where id = ? `;
        this.selectMahasiswa = `SELECT 
        m.id,
        m.nrp,
        m.nama,
        m.email,
        m.jurusan_id as jurusan_id,
        j.nama as jurusan,
        m.alamat,
        m.noTelepon,
        m.kodePIN FROM mahasiswa as m
        left join jurusan as j on m.jurusan_id = j.id
        where m.nrp = ? `;
        this.selectLulusan = `SELECT
        l.ipk,
        l.lamaTA,
        l.judulTA,
        l.tanggalLulus
        FROM lulusan as l
        left join mahasiswa as m on l.mahasiswa_id = m.id
        where m.nrp = ?
        `;





    };
  
}

module.exports = Mahasiswa;




