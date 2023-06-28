import { Child, ChildAsFC } from './Child';

const Parent = () => {
  const onClick = () => console.log(123);
  return (
    <div>
      <Child color="red" onClick={onClick}></Child>
      <ChildAsFC color="green" onClick={onClick}></ChildAsFC>
    </div>
  );
};

export default Parent;
