// Problem:
// Given an array of products, each with properties: name, price, category, and ratings (an array of numbers),
// write a function that filters this array for products in a specific category with an average rating of 4 or higher.
// Then use map to transform the resulting array into an array of objects, each containing only the name and averageRating.

const products = [
  {
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    ratings: [5, 4, 3, 4, 5],
  },
  { name: 'Jeans', price: 40, category: 'Apparel', ratings: [5, 5, 4] },
  { name: 'Sofa', price: 500, category: 'Furniture', ratings: [3, 4, 3, 2] },
  {
    name: 'Earbuds',
    price: 100,
    category: 'Electronics',
    ratings: [4, 4, 5, 4, 4, 5],
  },
  { name: 'Shirt', price: 20, category: 'Apparel', ratings: [3, 2, 4] },
];

// Your task:
// 1. Filter the products array to include only products in a given category (e.g., "Electronics")
//    with an average rating of 4 or higher.
// 2. Map the resulting array to a new array of objects with each object containing the 'name' and 'averageRating' of the product.

// Example function call:
// let highRatedElectronics = filterAndMapProducts(products, "Electronics");
// Expected output: [{ name: "Laptop", averageRating: 4.2 }, { name: "Earbuds", averageRating: 4.3 }]

function filterAndMapProducts(products, category) {
  return products
    .filter((x) => {
      let avgRating =
        x.ratings.reduce((acc, curr) => acc + curr, 0) / x.ratings.length;
      return x.category === category && avgRating >= 4;
    })
    .map((x) => {
      let avgRating =
        x.ratings.reduce((acc, curr) => acc + curr, 0) / x.ratings.length;
      return { name: x.name, averageRating: avgRating.toFixed(1) };
    });
}

var filteredProducts = filterAndMapProducts(products, 'Electronics');
console.log(filteredProducts);