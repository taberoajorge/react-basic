import React from "react";
// import styled from "styled-components";



function TodoMain({ children, loading }) {
  return (
    <main>
      {React.Children
      .toArray(children)
      .map((child) => React.cloneElement(child, { loading: loading })
      )}
    </main>
  );
}

export { TodoMain };
