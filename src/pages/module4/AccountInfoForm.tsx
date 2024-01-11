import { Field, ErrorMessage } from "formik";

interface AccountInfoFormProps {}

const AccountInfoForm: React.FC<AccountInfoFormProps> = () => {
  return (
    <div className="max-w-md mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <Field
          type="text"
          id="username"
          name="username"
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <ErrorMessage
          name="username"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <Field
          type="password"
          id="password"
          name="password"
          className="w-full border border-gray-300 p-2 rounded-md"
        />
        <ErrorMessage
          name="password"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default AccountInfoForm;
