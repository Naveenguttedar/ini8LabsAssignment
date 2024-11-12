import UserTable from "./UserTable";

interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
}

interface UserListProps {
  users: User[];
  onUpdateUser: (updatedUser: User) => void;
  onDeleteUser: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onUpdateUser,
  onDeleteUser,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Registered Users
      </h2>
      <UserTable
        users={users}
        onUpdateUser={onUpdateUser}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
};

export default UserList;
