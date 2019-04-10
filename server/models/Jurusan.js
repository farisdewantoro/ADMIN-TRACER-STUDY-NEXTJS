

class Jurusan{
    constructor(){
    this.SelectAll = 'SELECT * FROM jurusan';

    };

    getJurusanById(id){
        return `SELECT * FROM jurusan where id = ${id}`;
    };

}

module.exports=Jurusan;
