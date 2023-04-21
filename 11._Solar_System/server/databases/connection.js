import sqlite3 from "sqlite3";
import { open } from "sqlite";



const connection = await open({
    filename: './solar_system.db', // Kan også være kaldet .sqlite i stedet for .db, det er bare for at vise det er en database fil
    driver: sqlite3.Database
});

export default connection;
