function formatPhone(phoneNumber:number):string{
    const pString: string = phoneNumber.toString()
    return(`(${pString.substring(0, 3)}) ${pString.substring(3, 6)}-${pString.substring(6, 10)}`)
}
module.exports = {
    formatPhone,
}