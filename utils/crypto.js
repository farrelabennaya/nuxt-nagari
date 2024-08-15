import { AES, enc } from "crypto-js";

// Kunci enkripsi harus sama dengan yang digunakan di backend
const secretKey = enc.Base64.parse("lOTc9Tirr9npm4V6tGcgq0/IkZf3zm3SQddJQ8vRNZg=");

export function encrypt(data) {
  return AES.encrypt(data, secretKey, {
    mode: enc.ModeECB, // Mode enkripsi yang sama dengan backend
    padding: enc.Pkcs7, // Padding yang sama
  }).toString();
}

export function decrypt(ciphertext) {
  try {
    const bytes = AES.decrypt(ciphertext, secretKey, {
      mode: enc.ModeECB, // Mode dekripsi yang sama dengan backend
      padding: enc.Pkcs7, // Padding yang sama
    });
    return bytes.toString(enc.Utf8); // Dekodekan hasil menjadi UTF-8 string
  } catch (error) {
    console.error("Decryption error:", error);
    return "Failed to decrypt QR code.";
  }
}
