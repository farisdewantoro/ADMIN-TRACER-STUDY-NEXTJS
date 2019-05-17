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
        this.deletePekerjaan = `DELETE FROM pekerjaan where mahasiswa_id = ?`;
        this.deletePrestasi = `DELETE FROM prestasi where mahasiswa_id = ? `;
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
        this.addPekerjaan = `INSERT INTO pekerjaan set ?`;
        this.updatePekerjaan = `UPDATE pekerjaan set ? where mahasiswa_id = ?`
        this.addPrestasi = `INSERT INTO prestasi set ?`;
        this.updatePrestasi = `UPDATE prestasi set ? where mahasiswa_id = ?`;
        this.getAllPekerjaan = `SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPerusahaan,
        p.tanggalMasuk,
        p.tempat,
        p.jabatan,
        j.nama as jurusan,
        j.prodi
        from pekerjaan as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        order by m.created_at desc`;
        this.getAllPekerjaanByNRP = `SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPerusahaan,
        p.tanggalMasuk,
        p.tempat,
        p.jabatan,
        j.nama as jurusan,
        j.prodi,
        j.id as jurusan_id
        from pekerjaan as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        where m.nrp = ?
        order by m.created_at desc`;
        this.getAllPrestasi =`
        SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPrestasi,
        p.jenisPrestasi,
        p.tahun,
        j.nama as jurusan,
        j.prodi
        from prestasi as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        order by m.created_at desc
        `;
        this.getPrestasiByNRP=`
        SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPrestasi,
        p.jenisPrestasi,
        p.tahun,
        j.nama as jurusan,
        j.prodi,
          j.id as jurusan_id
        from prestasi as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        where m.nrp = ?
        order by m.created_at desc
        `
    };

    getAllJurusanPekerjaan(id){
        return `SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPerusahaan,
        p.tanggalMasuk,
        p.tempat,
        p.jabatan,
        j.nama as jurusan,
        j.prodi
        from pekerjaan as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        where j.id = ${id}
        order by m.created_at desc`;
    }

    getAllJurusanPrestasi(id){
        return `SELECT
        m.id,
        m.nrp,
        m.nama,
        p.namaPrestasi,
        p.jenisPrestasi,
        p.tahun,
        j.nama as jurusan,
        j.prodi
        from prestasi as p
        left join mahasiswa as m on p.mahasiswa_id = m.id
        left join jurusan as j on m.jurusan_id = j.id
        where j.id = ${id}
        order by m.created_at desc`;
    }

    getAllByJurusan(id){
        return `SELECT
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
        where j.id = ${id}
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
