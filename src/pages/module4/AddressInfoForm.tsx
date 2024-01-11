import { Field, ErrorMessage } from "formik";

interface AddressInfoFormProps {}

const AddressInfoForm: React.FC<AddressInfoFormProps> = () => {
  return (
    <div className="max-w-md mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <div className="flex flex-col">
        <label htmlFor="streetAddress" className="mb-1 text-gray-700">
          Street Address
        </label>
        <Field
          type="text"
          id="streetAddress"
          name="streetAddress"
          className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="mt-1">
          {" "}
          <ErrorMessage
            name="streetAddress"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="mb-1 text-gray-700">
          City
        </label>
        <Field
          type="text"
          id="city"
          name="city"
          className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="mt-1">
          <ErrorMessage
            name="city"
            component="div"
            className="text-red-500 text-xs"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col">
          <label htmlFor="state" className="mb-1 text-gray-700">
            State
          </label>
          <Field
            type="text"
            id="state"
            name="state"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mt-1">
            <ErrorMessage
              name="state"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="zipCode" className="mb-1 text-gray-700">
            Zip Code
          </label>
          <Field
            type="text"
            id="zipCode"
            name="zipCode"
            className="border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mt-1">
            <ErrorMessage
              name="zipCode"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressInfoForm;
