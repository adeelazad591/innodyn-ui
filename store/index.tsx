"use client";

import { useState } from "react";
import { UIContext } from "./slices/ui.slice";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <UIContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </UIContext.Provider>
  );
}

export { useUI } from "./slices/ui.slice";
