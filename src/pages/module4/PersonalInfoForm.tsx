import { Field, ErrorMessage } from "formik";

interface PersonalInfoFormProps {}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = () => {
  return (
    <div className="max-w-md mt-8 p-6 bg-gray-200 shadow-md rounded-md ">
      <div className="mx-4">
        <label
          className="block text-gray-600 text-sm font-semibold"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <Field
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-2 px-4"
          type="text"
          id="fullName"
          name="fullName"
        />
        <ErrorMessage
          name="fullName"
          component="div"
          className="text-red-500 text-sm mt-1 text-xs my-1.5"
        />
      </div>

      <div className="mx-4">
        <label
          htmlFor="email"
          className="block text-gray-600 text-sm font-semibold text-xs my-1.5"
        >
          Email Address
        </label>
        <Field
          type="email"
          id="email"
          name="email"
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-2 px-4 my-1.5"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm mt-1 text-xs my-1.5"
        />
      </div>

      <div className="mx-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-gray-600 text-sm font-semibold"
        >
          Date of Birth
        </label>
        <Field
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          className="border-2 border-gray-300 focus:outline-none focus:border-blue-500 rounded-md py-2 px-4"
        />
        <ErrorMessage
          name="dateOfBirth"
          component="div"
          className="text-red-500 text-sm mt-1 text-xs my-1.5"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
