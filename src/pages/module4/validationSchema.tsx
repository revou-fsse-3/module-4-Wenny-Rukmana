// validationSchema.ts

import * as Yup from "yup";

interface AccountInfoValues {
  username: string;
  password: string;
}

export const validationSchemaAccountInfo: Yup.ObjectSchema<AccountInfoValues> =
  Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contain at least 8 characters, one letter, one number and one special character"
      ),
  });

interface AddressInfoValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export const validationSchemaAddressInfo: Yup.ObjectSchema<AddressInfoValues> =
  Yup.object().shape({
    streetAddress: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string()
      .matches(/^\d{5}$/, "Invalid Zip Code")
      .required("Zip Code is required"),
  });

interface PersonalInfoValues {
  fullName: string;
  email: string;
  dateOfBirth: Date;
}

export const validationSchema: Yup.ObjectSchema<PersonalInfoValues> =
  Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    dateOfBirth: Yup.date()
      .nullable()
      .required("Date of Birth is required")
      .max(new Date(), "Date of Birth is required"),
  });
