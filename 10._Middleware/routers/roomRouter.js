import { Router } from "express";

const router = Router();

router.get("/room", (req, res, next) => {
    // next(); gør at vi går videre til næste metode/linje
    console.log("Welcome");
    res.send({ message: "I am in room 1"});
});

router.get("/room", (req, res, next) => {
    //next();
    res.send({ message: "I am in room 2"});
});

export default router;