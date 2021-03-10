import React, { useContext } from 'react';
import TestContext from "./TestContext";

function UIContext() {

  const { login } = useContext(TestContext)

  return (
    <TestContext.Provider>

      <p>{login}</p>
    </TestContext.Provider>
  );
}
