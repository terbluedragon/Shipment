import { WaterArea as TWaterArea } from "../api/waterArea/WaterArea";

export const WATERAREA_TITLE_FIELD = "name";

export const WaterAreaTitle = (record: TWaterArea): string => {
  return record.name?.toString() || String(record.id);
};
