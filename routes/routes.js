import express from "express";
import { 
    getMahasiswa,
    getMahasiswaByNim,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa,
} from "../controllers/mahasiswaController.js";

const routes = express.Router();

routes.get("/", getMahasiswa);
routes.get("/find", getMahasiswaByNim);
routes.post("/create", createMahasiswa);
routes.put("/update", updateMahasiswa);
routes.delete("/delete", deleteMahasiswa);

export default routes;