console.log("todo okey");

const getProducts = async () => {
  const response = await fetch("./data.json");
  const res = await response.json();
  console.log(res);
};

getProducts();
