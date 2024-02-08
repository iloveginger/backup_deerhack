// const dataFetch = async () => {
//     const response = await fetch("http://localhost:1337/api/judges");
//     const data = await response.json();

//   return (
//    data
//   )
// }
const dataFetch = async () => {
  const data = {
    name: "krish",
    src: "https://unsplash.com/photos/a-group-of-people-standing-next-to-each-other-ggiLEZr6Jis",
  };

  return { data };
};

export default dataFetch;
