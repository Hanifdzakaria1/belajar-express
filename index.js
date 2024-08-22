import express from "express";
import db from "./koneksi.js";
const app = express();
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get("/", (req,res) => {
//     const sql = "SELECT * FROM mahasiswa"
//     db.query(sql, (eror, result) => {
//         if(eror) return res.send(eror)
//         res.json(result)
//     })
//     res.send("test")
// })

// app.get("/find", (req,res) => {
//     const nim = req.query.nim;
//     const sql = `SELECT * FROM mahasiswa WHERE nim = $(nim)`
//     db.query(sql, (eror, result) => {
//         res.json(result)
//     })
// })

// app.get("/find", (req,res) => {
//     const {nim, nama_lengkap, kelas, alamat} = req.body
//     const sql = "INSERT * FROM mahasiswa (nim, nama_lengkap, kelas, alamat) VALUES (?,?,?,?)"
//     db.query(sql, [nim, nama_lengkap, kelas, alamat], (eror, result) => {
//         // res.json(result)
//         if (error) {
//             res.status(400);
//             res.send(error);
//         }
//         res.status(201);
//         res.send(result);
//     })
// })

// app.delete("/delete", (req, res) => {
//     const nim = req.query.nim
//     const sql = "DELETE FROM mahasiswa WHERE nim = ?"
//     db.query(sql, [nim], (eror, result) => {
//         if(eror) {

//             res.send(eror)
//         }
//         res.status(400);
//         res.json("data brhasil dihapus");
//     })
// })

// app.put("/update", (req, res) => {
//     const nim = req.query.nim;
//     const {nama_lengka, kelas, alamat}= req.body

//     if(nim || nama_lengka || kelas || alamat) {
//         const query = 'UPDATE mahasiswa SET nama_lengkap ="${nama_lengkap}", kelas ="${kelas}", alamat ="${alamat}" WHERE nim = ${nim}';
//         db.query(query,(error, result) =>{
//             if (error) res.status(400).send(error.message);

//             res.json(result)
//         });
//     }else {
//         res.send("isi body nya")
//     }
// });

app.use("/", routes)

app.listen(PORT, () => {
    console.log("server berjalan di https://localhost:3000" + PORT);
});