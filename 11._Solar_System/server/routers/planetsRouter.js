import { Router } from "express";
const router = Router();
import db from "../databases/connection.js";


router.get("/planets", async (req, res) => {
    const planets = await db.all("SELECT * FROM planets;"); // db.get - db.each - db.all
    res.send({ planets });
});

export default router;