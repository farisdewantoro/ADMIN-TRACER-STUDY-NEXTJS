class Admin{
    constructor(){
        this.createAdminMaster = `INSERT INTO admin set ? `;
        this.Login = `SELECT * from admin where username = ? and password = ?`;
        this.SelectAdmin = `SELECT 
        a.username,
        a.password,
        a.hak_akses,
        a.id,
        j.nama as jurusan,
        j.prodi,
        j.id as jurusan_id
        from admin as a
        left join admin_jurusan as aj on a.id = aj.admin_id
        left join jurusan as j on aj.jurusan_id = j.id
        where a.username = ?
        `;
        this.createAdmin = `INSERT INTO ADMIN set ? `;
        this.createAdminJurusan = `INSERT INTO admin_jurusan set ? `;
    }
}

module.exports = Admin;