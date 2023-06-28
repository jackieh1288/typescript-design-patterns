interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      <h1>Hi from Child!</h1>
      <h4>{color}</h4>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <h1>Hi from Child!</h1>
      <h4>{color}</h4>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
