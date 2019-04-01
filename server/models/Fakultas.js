class Fakultas{
    constructor(){
        this.querySelectAllWithJurusan =`SELECT
        f.nama as fakultas,
        f.singkatan,
        j.nama as jurusan,
        j.prodi,
        j.kodeJurusan,
        j.akreditasi
        from fakultas as f
        left join jurusan as j on f.id = j.fakultas_id
        order by f.nama   
        ` 
    }
}


module.exports=Fakultas;