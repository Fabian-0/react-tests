import { createContext } from "react";

const TestContext = createContext(
  {
    login: null,
    log: () => {}
  }
);

export default TestContext;