import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 23 },
  { name: 'Michael', age: 18 },
];

const UserSearchFocusInit: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const handleFind = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleFind}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearchFocusInit;
