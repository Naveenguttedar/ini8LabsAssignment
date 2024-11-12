// Type definition for User
interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

interface UserTableProps {
  users: User[];
  onUpdateUser: (updatedUser: User) => void;
  onDeleteUser: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  onUpdateUser,
  onDeleteUser,
}) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Name
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Email
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Date of Birth
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.email}</td>
            <td className="px-4 py-2">{user.dob}</td>
            <td className="px-4 py-2">
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => onUpdateUser({ ...user })}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:text-red-800 ml-4"
                onClick={() => onDeleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
