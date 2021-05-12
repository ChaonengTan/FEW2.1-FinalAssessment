function formatPhone(phoneNumber) {
    var pString = phoneNumber.toString();
    if (pString.length != 10) {
        throw new Error('Not 10 digits');
    }
    return ("(" + pString.substring(0, 3) + ") " + pString.substring(3, 6) + "-" + pString.substring(6, 10));
}
module.exports = {
    formatPhone: formatPhone
};
