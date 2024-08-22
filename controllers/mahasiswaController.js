import db from "../koneksi.js";

export const getMahasiswa = (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (eror, result) => {
        if(eror) return res.send(eror)
        res.send(result);
    });
};

// module.explorts = {
//     getMahasiswa,
// };

// export const getMahasiswa = (req, res) => {
//     db.query(sql, (error, result) => {
//     });
// };

export const getMahasiswaByNim = () => {
    const nim = req.query.nim;
    const sql = `SELECT *FORM mahasiswa WHERE nim = &(nim)`;
    db.query(sql,(error, result) => {
        res.json(result);
    });
};

export const createMahasiswa = (req, res) => {
    const {nim, nama_lengkap, kelas, alamat} = req.body
    const sql = "INSERT * FROM mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
    db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
        // res.json(result)
        if (error) {
            res.status(400);
            res.send(error);
        }
        res.status(201);
        res.send(result);
    })
}

export const updateMahasiswa = (res, req) => {
    const {nim, nama_lengkap, kelas, alamat} = req.body
    const sql = "INSERT * FROM mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
    db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
        // res.json(result)
        if (error) {
            res.status(400);
            res.send(error.message);
            res.json(result)
        } else {
        res.send("isi body nya");
        }
    })
}

export const deleteMahasiswa = (res, req) => {
    const nim = req.query.nim
    const sql = "DELETE FROM mahasiswa WHERE nim = ?"
    db.query(sql, [nim], (eror, result) => {
        if(eror) {                
            res.send(eror)
        }
        res.status(400);
        res.json("data brhasil dihapus");
    })
}