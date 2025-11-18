               <!-- keyof TypeScript -->

2.keyof TypeScript একটি type operator, যেটা কোনো object type-এর সবগুলো key-কে union type হিসেবে রিটার্ন করে।
কোনো object type দিলে তার keys গুলোকে string literal union হিসেবে দেয়।
এটা type-safe keyof lookup, mapping, generic constraint—এই সব ক্ষেত্রে খুবই কাজে লাগে।

Example 1 — keyof basic use
type User = {
name: string;
age: number;
isAdmin: boolean;
};

type UserKeys = keyof User;
result: type UserKeys = "name" | "age" | "isAdmin"

Example 3 — Generic + keyof
function pick<T, k extends keyof T>(obj: T, key: K) {
return obj[key];
}

const car = { brand: "BMW", model: "M4", year: 2024 };

pick(car, "brand");
pick(car, "color"); কারণ color key নেই

                     <!-- union and intersection types in TypeScript -->

1.union type
Union type মানে হচ্ছে একটি ভেরিয়েবলে এর একাধিক টাইপের যেকোনো একটি টাইপ হতে পারে।

//union type example
type UserRole = "admin" | "user";
const getDashboard = (role: UserRole) => {
if (role === "admin") {
return "Welcome Admin";
} else if (role === "user") {
return "welcome user";
} else return "welcome mentor";
};


২.Intersection Type

Intersection type মানে হচ্ছে একাধিক টাইপকে merge করে সব properties একসাথে পাওয়া।

//Example

// intersection types &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: string;
};

type EmployeeManager = Employee & Manager;
const chowdhuriShaheb: EmployeeManager = {
  id: "124",
  name: "rakib",
  phoneNo: "1230",
  designation: "ajhalk",
  teamSize: "12",
};
console.log("🚀 ~ chowdhuriShaheb:", chowdhuriShaheb);