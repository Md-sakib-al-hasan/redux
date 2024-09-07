import "./App.css";
import Counter from "./assets/Counter";
import Stack from "./assets/stack";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/counsterslice";

function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCounter = counters.reduce(
    (sum, current) => sum + current.value,
    0
  );

  const handelincrement = (countid) => {
    dispatch(increment(countid));
  };

  const handeldecrement = (countid) => {
    dispatch(decrement(countid));
  };

  return (
    <>
      <div>
        {counters.map((conter) => (
          <Counter
            key={conter.id}
            count={conter.value}
            increment={() => handelincrement(conter.id)}
            decrement={() => handeldecrement(conter.id)}
          ></Counter>
        ))}
        <Stack value={totalCounter}></Stack>
      </div>
    </>
  );
}

export default App;
