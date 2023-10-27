import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WaterAreaWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
};
