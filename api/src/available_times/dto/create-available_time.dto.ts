import { IsDate, IsDateString, IsNotEmpty, MinLength } from "class-validator";

export class CreateAvailableTimeDto {

  @IsNotEmpty()
  @IsDateString()
  start_time: Date;

  @IsNotEmpty()
  @IsDateString()
  end_time: Date;

}
