import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  is_active: boolean;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(
    null
  );
  const [newName, setNewName] = useState<string>("");
  const [newStatus, setNewStatus] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mock-api.arikmpt.com/api/category",
        {
          params: {
            page: 1,
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTA2YWE1LWU3MGEtNDhjYy05N2M5LWQ1MjdiNWVkZTgxMCIsImlhdCI6MTcwNDk5MjM4OSwiZXhwIjoxNzA1MDEzOTg5fQ.VAvegye6GQM9I213c0k5qk0ScaF4yHeopROmG9XfrJA",
          },
        }
      );
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleUpdate = async (categoryId: string) => {
    try {
      const response = await axios.put(
        `https://mock-api.arikmpt.com/api/category/update`,
        {
          id: categoryId,
          name: newName,
          is_active: newStatus,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTA2YWE1LWU3MGEtNDhjYy05N2M5LWQ1MjdiNWVkZTgxMCIsImlhdCI6MTcwNDk5MjM4OSwiZXhwIjoxNzA1MDEzOTg5fQ.VAvegye6GQM9I213c0k5qk0ScaF4yHeopROmG9XfrJA",
          },
        }
      );

      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === categoryId
            ? { ...category, name: newName, is_active: newStatus }
            : category
        )
      );

      setEditingCategoryId(null);
      setNewName("");
      setNewStatus(false);

      console.log("Category updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleEdit = (
    categoryId: string,
    currentName: string,
    currentStatus: boolean
  ) => {
    // Set editing state
    setEditingCategoryId(categoryId);
    setNewName(currentName);
    setNewStatus(currentStatus);
  };

  const handleCancelEdit = () => {
    // Reset editing state
    setEditingCategoryId(null);
    setNewName("");
    setNewStatus(false);
  };

  const handleDelete = async (categoryId: string) => {
    try {
      await axios.delete(
        `https://mock-api.arikmpt.com/api/category/${categoryId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJhNTA2YWE1LWU3MGEtNDhjYy05N2M5LWQ1MjdiNWVkZTgxMCIsImlhdCI6MTcwNDk5MjM4OSwiZXhwIjoxNzA1MDEzOTg5fQ.VAvegye6GQM9I213c0k5qk0ScaF4yHeopROmG9XfrJA",
          },
        }
      );
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Category List</h2>
      <div className="mb-4">
        <Link to="/create-category" className="text-blue-500 hover:underline">
          Add new category
        </Link>
      </div>
      {Array.isArray(categories) && categories.length > 0 ? (
        <table className="border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Active</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border">
                <td className="py-2 px-4 border">{category.id}</td>
                <td className="py-2 px-4 border">
                  {editingCategoryId === category.id ? (
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    category.name
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editingCategoryId === category.id ? (
                    <select
                      value={newStatus.toString()}
                      onChange={(e) => setNewStatus(e.target.value === "true")}
                      className="border rounded px-2 py-1"
                    >
                      <option value={"true"}>True</option>
                      <option value={"false"}>False</option>
                    </select>
                  ) : (
                    String(category.is_active)
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editingCategoryId === category.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(category.id)}
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          handleEdit(
                            category.id,
                            category.name,
                            category.is_active
                          )
                        }
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
};

export default CategoryList;
