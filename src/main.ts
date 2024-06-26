import "./style.css";
import axios from "axios";

const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};

console.log("age:" + age);
console.log("username:" + username);
console.log("toggle:" + toggle);
console.log("empty:" + empty);
console.log("callback(5):" + callback(5));
console.log("--------------1.ts------------------");

let person: [string, number];
person = ["Max", 21];

console.dir("person:[" + person + "]");
console.log("---------------2.ts-----------------");
let stringNumberType: string | number;
stringNumberType = 45;
stringNumberType = "hello";
console.log(stringNumberType);

type EnableOrDisable = "enable" | "disable";
let value: EnableOrDisable;
value = "enable";
console.log(value);
console.log("---------------3.ts-----------------");
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
showMessage("Your advertisement could be here ");
console.log(calc(5, 6));

//  console.log(customError());
// нічого більше не буде робити бо буде помилка
console.log("---------------4.ts-----------------");
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  // console.log(day + "day");

  return day === 5 || day === 6;
};
console.log("Monday - " + isWeekend(DayOfWeek.Monday));
console.log("Tuesday - " + isWeekend(DayOfWeek.Tuesday));
console.log("Wednesday - " + isWeekend(DayOfWeek.Wednesday));
console.log("Thursday - " + isWeekend(DayOfWeek.Thursday));
console.log("Friday - " + isWeekend(DayOfWeek.Friday));
console.log("Saturday - " + isWeekend(DayOfWeek.Saturday));
console.log("Sunday - " + isWeekend(DayOfWeek.Sunday));
console.log("---------------5.ts-----------------");
interface IUser {
  name: string;
  age: number;
  email: string;
  address?: {
    city: string;
    country: string;
  };
}
let mango: IUser;
mango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};
let poly: IUser;
poly = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
console.dir(mango);
console.dir(poly);

console.log("---------------6.ts-----------------");
interface IPage {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}
let page1: IPage;
page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};
let page2: IPage;
page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
console.dir(page1);
console.dir(page2);
console.log("---------------7.ts-----------------");
console.log("---------------generics-----------------");
console.log("---------------1.ts (результат промісу буде після виконання всього коду)-----------------");
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
fetchData("https://catfact.ninja/fact");
console.log("---------------2.ts-----------------");
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
let result = compare(
  { name: "Iryna", color: "red" },
  { position: 200, weight: 300 }
);
console.dir(result);
console.log("---------------3.ts-----------------");
type typeA = {
  name: string;
};
type typeB = {
  weight: number;
};
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

let resultMerge = merge<typeA, typeB>({ name: "Iryna" }, { weight: 57 });
console.dir(resultMerge);
console.log("---------------4.ts-----------------");
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  const defaultUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultUser, ...initialValues };
}

let resultUser = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
console.log(resultUser);
console.log("---------------5.ts-----------------");
enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
type UserRolesStatuses = Record<UserRole, string>;
const RoleDescription: UserRolesStatuses = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
console.log(RoleDescription);
console.log("---------------6.ts-----------------");
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const params: Params = {
  email: "bagira.irina.m@gmail.com",
  firstName: "Iryna",
  lastName: "Mykhailovska",
  phone: "+380963537549",
};

console.log(params);
