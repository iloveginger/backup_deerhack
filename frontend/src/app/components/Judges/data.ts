export default async function FetchData() {
  const response = await fetch("http://localhost:1337/api/judges");
  const data = await response.json();
  return data;
}
