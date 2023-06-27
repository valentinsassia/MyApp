import CryptoJS from "crypto-js"

export const secretKey = "h>GkF5Mn]A*7#S]C#beL^ESf-2qy7$IS({h]@~'W8rug:fKi5C`x:p>i|6s0*[K"

export const deCrypt = (valor) => {
    const bytes = CryptoJS.AES.decrypt(valor, secretKey)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}

export const enCrypt = (valor) => {
    return CryptoJS.AES.encrypt(JSON.stringify(valor), secretKey).toString()
}
