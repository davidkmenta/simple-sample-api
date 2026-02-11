/**
 * @param {Date} date
 */
module.exports.formatDate = (date) => {
    // [CR] dá se použít nějaká knihovna?
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}