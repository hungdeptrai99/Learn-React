import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counter.slice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log({ count, increase, decrease });
  return (
    <div>
      <button onClick={() => dispatch(decrease())}>Giam</button>
      <div>{count}</div>
      <button onClick={() => dispatch(increase())}>Tang</button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   count: state.counter.count,
// });
// const mapDispatchToProps = {
//   increase,
//   decrease,
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
