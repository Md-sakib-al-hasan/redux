// Counter.js

import Button from "./Button";
import Value from "./Value";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="bg-white p-6 rounded shadow-md">
        {/* <h1 className="text-4xl font-bold mb-4">Counter: {count}</h1> */}
        <Value count={count}></Value>
        <div className="flex space-x-4">
          <Button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
          >
            Increment
          </Button>
          <Button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 focus:ring-red-300"
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
