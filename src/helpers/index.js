export const FormatDate = (date) => {
    return date.split(/(?= )|\b/).reverse().join("").substr(15, 25);
};