import { useState } from "react";

import GlobalContext from "./GlobalContext";

interface GlobalStateProps {
  children: React.ReactNode;
}

export default function GlobalState({ children }: GlobalStateProps) {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        menuToggle,
        setMenuToggle: () => setMenuToggle((prev) => !prev),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
