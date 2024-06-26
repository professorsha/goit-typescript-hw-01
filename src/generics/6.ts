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
