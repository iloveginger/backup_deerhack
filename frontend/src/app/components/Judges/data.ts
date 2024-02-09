export default async function FetchData() {
  const response = await fetch(process.env.link + "judges");
  const data = await response.json();
  return data;
}
