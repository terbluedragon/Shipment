import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterAreaServiceBase } from "./base/waterArea.service.base";

@Injectable()
export class WaterAreaService extends WaterAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
