import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateCategory: React.FC = () => {
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [isCategoryActive, setIsCategoryActive] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const newCategory = {
        name: newCategoryName,
        is_active: isCategoryActive,
      };

      await axios.post(
        "https://mock-api.arikmpt.com/api/category/create",
        newCategory,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTA2YWE1LWU3MGEtNDhjYy05N2M5LWQ1MjdiNWVkZTgxMCIsImlhdCI6MTcwNDk5MjM4OSwiZXhwIjoxNzA1MDEzOTg5fQ.VAvegye6GQM9I213c0k5qk0ScaF4yHeopROmG9XfrJA",
          },
        }
      );

      setNewCategoryName("");
      setIsCategoryActive(false);

      navigate("/category");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Category</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Name:</label>
        <input
          className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          placeholder="Enter Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Active:</label>
        <select
          className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          value={isCategoryActive.toString()} // Convert boolean to string
          onChange={(e) => setIsCategoryActive(e.target.value === "true")}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
          onClick={handleCreate}
        >
          Create
        </button>

        <Link
          to="/category"
          className="text-blue-500 font-semibold hover:underline"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default CreateCategory;
