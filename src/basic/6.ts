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
