export default function isString(str) {
  try {
    return typeof str === "string";
  } catch (error) {
    return false;
  }
}
