import { Router } from "express";
const router = Router();

router.get("/api/guards/", (req, res) => {
    if (req.query.passport === "theskyisblue"){
        return res.redirect("/api/tanks");
    }
    res.send({ message: "Wrong passport."});
});


export default router;