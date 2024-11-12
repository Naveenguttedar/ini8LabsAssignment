import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

interface AddUserFormProps {
  onAddUser: (user: User) => void;
  editUser?: User | null;
  editUserFunc?: (user: User) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({
  onAddUser,
  editUser,
  editUserFunc,
}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  useEffect(() => {
    if (editUser) {
      console.log(editUser);
      setName(editUser.name);
      setEmail(editUser.email);
      setDob(editUser.dob);
    }
  }, [editUser]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = { id: 0, name, email, dob };
    if (editUser && editUserFunc) {
      newUser.id = editUser.id;
      editUserFunc(newUser);
    } else onAddUser(newUser);
    setName("");
    setEmail("");
    setDob("");
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        {editUser ? "Edit User" : "Add User"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
