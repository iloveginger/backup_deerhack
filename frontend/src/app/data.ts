// const dataFetch = async () => {
//     const response = await fetch("fasdf");
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
