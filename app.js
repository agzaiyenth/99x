// Define products in an array
const products = [
  {
    reviewId: "1222",
    name: "Galactic Goggles",
    rating: 3.3,
    imageUrl: "./assets/Product 2.png",
    altText: "Galactic Goggles",
  },
  {
    reviewId: "1223",
    name: "Neuron Navigator",
    rating: 2.7,
    imageUrl: "./assets/Product 3.png",
    altText: "Neuron Navigator",
  },
  {
    reviewId: "1234321",
    name: "Astral Adapter",
    rating: 1.8,
    imageUrl: "./assets/Product 4.png",
    altText: "Astral Adapter",
  },
  {
    reviewId: "1221",
    name: "Quantum Quill",
    rating: 4.3,
    imageUrl: "./assets/Product 1.png",
    altText: "Quantum Quill",
  },
  {
    reviewId: "1234322",
    name: "Echo Enigma",
    rating: 2.4,
    imageUrl: "./assets/Product 5.png",
    altText: "Echo Enigma",
  },
  {
    reviewId: "1234323",
    name: "Nebula Nexus",
    rating: 3.9,
    imageUrl: "./assets/Product 6.png",
    altText: "Nebula Nexus",
  },
  {
    reviewId: "77",
    name: "Vortex Vision",
    rating: 4.1,
    imageUrl: "./assets/Product 7.png",
    altText: "Vortex Vision",
  },
];

// Function to find the highest rated product
function findHighestRatedProduct(products)  {
  if (products.length === 0) {
    return null; // Handle empty product list
  }

  // Clear previous higlighs if theres anys
  products.forEach(product => {
    delete product.isHighestRated;
  });

  // make it to decending order
  const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);

  // to identify the highest
  sortedProducts[0].isHighestRated = true;

  return sortedProducts[0];
}
// Function to find the lowest rated product
function findLowestRatedProduct(products) {
  if (products.length === 0) {
    return null; 
  }

  let min = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].rating < min.rating) {
      min = products[i];
    }
  }

  return min;
}

// Palindrome function
function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // comparing and reversing the items
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Function to calculate the number of verified reviews
function noOfVerifiedReviews(products) {
  let verifiedCount = 0;

  // Loop through products and count verified reviews
  for (const product of products) {
    if (isPalindrome(product.reviewId)) {
      verifiedCount++;
    }
  }

  return verifiedCount;
}

// Function to calculate the average rating
function calculateAverageRating(products) {
  // we check this cause we dont want ZERODIVISION ERROR anywhere in our page
  if (products.length === 0) {
    return 0; 
  }

  const sumOfRatings = products.reduce((acc, product) => acc + product.rating, 0);
  const averageRating = sumOfRatings / products.length;

  return averageRating;
}

// Sorting function
function sortProductsByRating(products) {
  products.sort((a, b) => b.rating - a.rating);
}

document.addEventListener("DOMContentLoaded", () => {
  // Function to create product HTML
  function createProductHTML(product) {
    const highlightClass = product.isHighestRated ? 'highlight' : '';
    const isVerified = isPalindrome(product.reviewId);
  
    return `
        <div class="product ${highlightClass}">
            <p>Review ID: <strong>${product.reviewId}</strong></p>
            <img src="${product.imageUrl}" alt="${product.altText}" />
            <h3>${product.name}</h3>
            <p>Rating: ${product.rating}</p>
            <p>Verified: ${isVerified ? 'Yes' : 'No'}</p>
        </div>
    `;
  }

  // Display the highest, lowest, and average ratings
  function displayCards() {
    const highestRated = findHighestRatedProduct(products);
    const lowestRated = findLowestRatedProduct(products);
    const avgRating = calculateAverageRating(products);

    document.getElementById("highest-rated").innerHTML =
      createProductHTML(highestRated);
    document.getElementById("lowest-rated").innerHTML =
      createProductHTML(lowestRated);
    document.getElementById("average-rating").innerText = avgRating.toFixed(1);
    document.getElementById("verified-reviews").innerText =
      noOfVerifiedReviews(products);
  }

  // Function to render all products
  function renderProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear current products
    productArray.forEach((product) => {
      productList.innerHTML += createProductHTML(product);
    });
  }

  function renderSortedProducts() {
    sortProductsByRating(products);
    renderProducts(products);
  }

  const sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click", renderSortedProducts);

  // Initially render all products and display ratings
  renderProducts(products);
  displayCards();
});

module.exports = {
  findHighestRatedProduct,
  findLowestRatedProduct,
  calculateAverageRating,
  noOfVerifiedReviews,
  isPalindrome,
  sortProductsByRating,
};
