// Passwords must never be saved as Plain text.
// Encrypted passwords are not safe. 
// Blowfish Cipher, som bcrypt er baseret på. Rainbow table?
// Hashing function; Something happens, and you can never go back? Once plaintext has been hashed, it cant be "re-hashed".

import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$tplLVnxC8ZND0K.TtxWICus7TW9taab3p9DeNG/S7DBW3yYys7fvW";

const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
//console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext, hashedPassword)
console.log(isSame);
