// MultiStepForm.tsx

import { useState } from "react";
import { Formik, Form } from "formik";
import PersonalInfoForm from "./PersonalInfoForm";
import AddressInfoForm from "./AddressInfoForm";
import AccountInfoForm from "./AccountInfoForm";
import {
  validationSchema,
  validationSchemaAddressInfo,
  validationSchemaAccountInfo,
} from "./validationSchema";

interface MultiStepFormValues {
  fullName: string;
  email: string;
  dateOfBirth: Date;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  const steps: string[] = [
    "Personal Information",
    "Address Information",
    "Account Information",
  ];

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const initialValues: MultiStepFormValues = {
    fullName: "",
    email: "",
    dateOfBirth: new Date(),
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  };

  return (
    <div className="flex">
      {/* Left Side Navigation */}
      <div>
        <ul className="space-y-2 mt-32 ml-4">
          {steps.map((s, index) => (
            <li
              key={index}
              className={`cursor-pointer transition-all duration-300 ease-in-out p-1 ${
                index + 1 === step
                  ? "font-bold text-blue-500 transform scale-105"
                  : "text-gray-500"
              }`}
              onClick={() => setStep(index + 1)}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Form Section */}
      <div className="w-3/4 mx-auto mt-8">
        {/* Progress Indicator */}
        <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">
          Step {step} of {steps.length}
        </div>

        {/* Formik Multi-step Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={
            step === 1
              ? validationSchema
              : step === 2
              ? validationSchemaAddressInfo
              : validationSchemaAccountInfo
          }
          onSubmit={(values) => {
            // Handle form submission logic
            console.log(values);
          }}
        >
          {({ isValid, dirty }) => (
            <Form>
              {/* Render form components based on the current step  */}
              {step === 1 && <PersonalInfoForm />}
              {step === 2 && <AddressInfoForm />}
              {step === 3 && <AccountInfoForm />}

              {/* Next and Previous buttons */}
              <div className="mt-4">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 transition duration-300 ease-in-out"
                  >
                    Previous
                  </button>
                )}

                {step < steps.length && (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isValid || !dirty}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Next
                  </button>
                )}

                {step === steps.length && (
                  <button
                    type="submit"
                    disabled={!isValid || !dirty}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiStepForm;
