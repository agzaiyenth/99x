const {
  findHighestRatedProduct,
  findLowestRatedProduct,
  noOfVerifiedReviews,
  calculateAverageRating,
  isPalindrome,
  sortProductsByRating,
} = require("../app.js");
const fs = require('fs');

let products;
let markup = fs.readFileSync("index.html").toString();
document.body.innerHTML = markup;

beforeEach(() => {
  products = [
    { reviewId: "1221", name: "Product 1", rating: 3.5 },
    { reviewId: "22", name: "Product 2", rating: 4.2 },
    { reviewId: "3537263", name: "Product 3", rating: 2.8 },
    { reviewId: "7394", name: "Product 4", rating: 1.8 },
    { reviewId: "6", name: "Product 5", rating: 2.3 },
  ];
});

describe("updateHeaderTitle", () => {
  test("Task-1 Update header title", () => {
    const h1 = document.querySelector('h1');
    expect(h1).not.toBeNull();
    expect(h1.textContent).toBe("Gizmo Gazette : Tech Reviews Platform");
  });
});

describe("findHighestRatedProduct", () => {
  test("Task-3 returns the product with the highest rating", () => {
    const result = findHighestRatedProduct(products);
    expect(result.rating).toBe(4.2);
  });
});

describe("findLowestRatedProduct", () => {
  test("Task-2 returns the product with the lowest rating", () => {
    const result = findLowestRatedProduct(products);
    expect(result.rating).toBe(1.8);
  });
});

describe("noOfVerifiedReviews", () => {
  test("Task-7 returns the number of verified reviews", () => {
    const result = noOfVerifiedReviews(products);
    expect(result).toBe(3);
  });
});

describe("calculateAverageRating", () => {
  test("Task-4 returns the average rating of products", () => {
    const result = calculateAverageRating(products);
    expect(result).toBeCloseTo(2.91, 1);
  });
});

describe("sortProductsByRating", () => {
  test("Task-5 returns the products sorted by rating in descending order", () => {
    sortProductsByRating(products);
    expect(products).toEqual([
      { reviewId: "22", name: "Product 2", rating: 4.2 },
      { reviewId: "1221", name: "Product 1", rating: 3.5 },
      { reviewId: "3537263", name: "Product 3", rating: 2.8 },
      { reviewId: "6", name: "Product 5", rating: 2.3 },
      { reviewId: "7394", name: "Product 4", rating: 1.8 },
    ]);
  });
});

describe("isPalindrome", () => {
  test("Task-6.a returns true for a palindrome string", () => {
    const examples = ["abba", "22", "1221", "1", "232"];
    examples.forEach((example) => {
      const result = isPalindrome(example);
      expect(result).toBe(true);
    });
  });

  test("Task-6.b returns false for a non-palindrome string", () => {
    const examples = ["hello", "12", "1349", "142"];
    examples.forEach((example) => {
      const result = isPalindrome(example);
      expect(result).toBe(false);
    });
  });
});
