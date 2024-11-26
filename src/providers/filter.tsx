"use client";

import { FilterItem, FilterType } from "@/types/filter";
import uniqBy from "lodash/uniqBy";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

type FilterModel = {
  filters: FilterItem[];
  onAddFilter: (filterItem: FilterItem) => void;
  onRemoveFilter: (filterItem: FilterItem) => void;
  onClearFilter: () => void;
};

const initialState: FilterModel = {
  filters: [],
  onAddFilter: () => {},
  onRemoveFilter: () => {},
  onClearFilter: () => {},
};

export const FilterContext = createContext<FilterModel>(initialState);

type FilterProviderProps = {
  children: ReactNode;
};

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filtersState, setFilters] = useState<FilterItem[]>([]);

  const filters = useMemo(() => {
    return uniqBy(
      filtersState.sort((a, b) => {
        const weight = {
          [FilterType.Level]: 1,
          [FilterType.Role]: 2,
          [FilterType.Language]: 3,
          [FilterType.Tool]: 4,
        };

        return weight[a.type] - weight[b.type];
      }),
      (item) => `${item.type}-${item.text.toLowerCase()}`
    );
  }, [filtersState]);

  const onAddFilter = useCallback(
    (filterItem: FilterItem) => {
      if (filterItem.type === FilterType.Role) {
        // Remove the existing role filter and add the new one
        return setFilters((prevFilters) => [
          ...prevFilters.filter((item) => item.type !== FilterType.Role),
          filterItem,
        ]);
      }
      if (filterItem.type === FilterType.Level) {
        // Remove the existing level filter and add the new one
        return setFilters((prevFilters) => [
          ...prevFilters.filter((item) => item.type !== FilterType.Level),
          filterItem,
        ]);
      }

      return setFilters((prevFilters) => {
        const newFilters = [...prevFilters, filterItem];
        return uniqBy(
          newFilters,
          (item) => `${item.type}-${item.text.toLowerCase()}`
        );
      });
    },
    [setFilters]
  );

  const onRemoveFilter = useCallback(
    (filterItem: FilterItem) => {
      // remove the filter item from state
      setFilters((prevFilters) =>
        prevFilters.filter(
          (item) =>
            item.type !== filterItem.type ||
            item.text.toLowerCase() !== filterItem.text.toLowerCase()
        )
      );
    },
    [setFilters]
  );

  const onClearFilter = useCallback(() => {
    setFilters([]);
  }, [setFilters]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        onAddFilter,
        onRemoveFilter,
        onClearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
