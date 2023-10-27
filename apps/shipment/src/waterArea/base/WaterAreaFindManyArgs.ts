/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WaterAreaWhereInput } from "./WaterAreaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { WaterAreaOrderByInput } from "./WaterAreaOrderByInput";

@ArgsType()
class WaterAreaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WaterAreaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => WaterAreaWhereInput, { nullable: true })
  @Type(() => WaterAreaWhereInput)
  where?: WaterAreaWhereInput;

  @ApiProperty({
    required: false,
    type: [WaterAreaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [WaterAreaOrderByInput], { nullable: true })
  @Type(() => WaterAreaOrderByInput)
  orderBy?: Array<WaterAreaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WaterAreaFindManyArgs as WaterAreaFindManyArgs };
