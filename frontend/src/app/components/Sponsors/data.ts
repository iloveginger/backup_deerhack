export default async function FetchData() {
  const response = await fetch(
    "http://localhost:1337/api/sponsors?populate=image",
    { cache: "no-store" },
  );
  const data = await response.json();
  return data;
}
