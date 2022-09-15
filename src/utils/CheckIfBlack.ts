// function wc_hex_is_light(color) {
//     const hex = color.replace('#', '');
//     const c_r = parseInt(hex.substring(0, 0 + 2), 16);
//     const c_g = parseInt(hex.substring(2, 2 + 2), 16);
//     const c_b = parseInt(hex.substring(4, 4 + 2), 16);
//     const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
//     return brightness > 155;
// }
const checkIfBlack = (color: string, name: string): boolean => {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    console.log(brightness, name);
    return brightness < 155;
}
export { checkIfBlack }