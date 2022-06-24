export default function htmlEntities(str) {
  const ta = document.createElement("textarea");
  ta.innerHTML = str;
  return ta.value;
}