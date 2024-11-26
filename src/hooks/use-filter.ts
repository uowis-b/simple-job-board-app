import { FilterContext } from "@/providers/filter";
import { useContext } from "react";

export function useFilter() {
  return useContext(FilterContext);
}
