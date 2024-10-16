"use client";

import { DomainContext, toEDomainType } from "@/provider/DomainProvider";
import { EDomainType } from "@/server/lib/loader";
import React, { useContext } from "react";

function DomainSwitcher() {
  const { toggleDomain, currentDomainType } = useContext(DomainContext);
  return (
    <select
      defaultValue={currentDomainType}
      className="select select-primary select-xs capitalize "
      onChange={(e) => {
        toggleDomain(toEDomainType(e.target.value)!);
      }}
    >
      {Object.values(EDomainType).map((d) => {
        return (
          <option key={d} value={d}>
            {d}
          </option>
        );
      })}
    </select>
  );
}

export default DomainSwitcher;
