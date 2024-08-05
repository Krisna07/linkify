export default function GenerateLink(value: string) {
  const valueSplit = value.split(" ");
  const linkSlug = valueSplit.join("_").toLocaleLowerCase();
  return linkSlug;
}
