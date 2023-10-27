import { WaterAreaWhereInput } from "./WaterAreaWhereInput";
import { WaterAreaOrderByInput } from "./WaterAreaOrderByInput";

export type WaterAreaFindManyArgs = {
  where?: WaterAreaWhereInput;
  orderBy?: Array<WaterAreaOrderByInput>;
  skip?: number;
  take?: number;
};
