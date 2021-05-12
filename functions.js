function formatPhone(phoneNumber) {
    var pString = phoneNumber.toString();
    return ("(" + pString.substring(0, 3) + ") " + pString.substring(3, 6) + "-" + pString.substring(6, 10));
}
module.exports = {
    formatPhone: formatPhone
};
