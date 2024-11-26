export enum FilterType {
  Role = "role",
  Level = "level",
  Language = "language",
  Tool = "tool",
}

export type FilterItem = {
  type: FilterType;
  text: string;
};
