import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsPositive } from "class-validator";

export class CreateSaleDto {
      @IsInt()
    @IsNotEmpty()
    @IsPositive()
    @ApiProperty()
    customer_id: number;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    user_id: number;

    @IsInt()
    @IsOptional()
    @IsPositive()
    @ApiProperty()
    vehicle_id: number;

    @IsNotEmpty()
    @ApiProperty({ example: '2020-11-01' })
    sale_date: Date;

    @IsNotEmpty()
    @ApiProperty({ example: 1800.00 })
    total_amount: number;

    @IsNotEmpty()
    @ApiProperty({ example: 'Credit Card' })
    payment_method: string;

    @IsNotEmpty()
    @ApiProperty({ example: 'Completed' })
    status: string;
}

export class UpdateSaleDto extends PartialType(CreateSaleDto) {}