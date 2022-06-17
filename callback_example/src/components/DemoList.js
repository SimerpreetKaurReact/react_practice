import React, { useMemo } from "react";

function DemoList(props) {
  const { items } = props;
  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("log inside DemoList");

  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(DemoList);
