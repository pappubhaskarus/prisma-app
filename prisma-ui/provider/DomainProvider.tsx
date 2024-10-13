"use client";

import { EDomainType } from "@/server/lib/loader";
import React, { useState } from "react";

// Define the shape of the context data
interface DomainContextType {
  currentDomainType?: EDomainType;
  toggleDomain: (domainType: EDomainType) => void;
}

// Create the context with a default value
export const DomainContext = React.createContext<DomainContextType>({
  currentDomainType: EDomainType.Blog,
  toggleDomain: (domainType: EDomainType) => {},
});

export function toEDomainType(value: string): EDomainType | undefined {
  if (Object.values(EDomainType).includes(value as EDomainType)) {
    return value as EDomainType;
  }
  return undefined; // Handle invalid input gracefully
}

// Create a provider component
export const DomainProvider = ({ children }: { children: React.ReactNode }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN_TYPE as string;
  if (!domain) {
    throw new Error("---- domain not set ---");
  }
  const [domainType, setDomainType] = useState<EDomainType>();

  const toggleDomain = (domainType: EDomainType) => {
    setDomainType(domainType);
  };

  return (
    <DomainContext.Provider
      value={{ currentDomainType: domainType, toggleDomain }}
    >
      {children}
    </DomainContext.Provider>
  );
};
