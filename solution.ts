// problem1
function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return;
}

// problem-2
function getLength(input: string | number[]) {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
}

// problem-3
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name} , Age: ${this.age}'`;
  }
}

// problem-4
type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]) {
  return items.filter((item) => item.rating >= 4);
}

// problem-5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]) {
  return users.filter((user) => user.isActive === true);
}

// problem-6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available ${book.isAvailable}`
  );
}

// problem-7

function getUniqueValues(arr1: string | number[], arr2: string | number[]) {
  const result: (string | number)[] = [];

  function exists(value: string | number, array: (string | number)[]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i], result)) {
      result[result.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i], result)) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}

// problem-8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]) {
  if (products.length === 0) {
    return 0;
  }
  return products
    .map((product) => {
      const baseTotal = product.price * product.quantity;
      if (product.discount) {
        const discountAmount = (baseTotal * product.discount) / 100;
        return baseTotal - discountAmount;
      }
      return baseTotal;
    })
    .reduce((sum, value) => sum + value, 0);
}
