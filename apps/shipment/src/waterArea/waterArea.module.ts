import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WaterAreaModuleBase } from "./base/waterArea.module.base";
import { WaterAreaService } from "./waterArea.service";
import { WaterAreaResolver } from "./waterArea.resolver";

@Module({
  imports: [WaterAreaModuleBase, forwardRef(() => AuthModule)],
  providers: [WaterAreaService, WaterAreaResolver],
  exports: [WaterAreaService],
})
export class WaterAreaModule {}
