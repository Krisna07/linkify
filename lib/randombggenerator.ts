export default function RandomBgGenerator() {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  const gradient = ` linear-gradient(135deg, ${randomColor} 0%, ${randomColor} 45%);`;
  return gradient;
}
