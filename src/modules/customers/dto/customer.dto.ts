import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'John' })
    first_name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Doe' })
    last_name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123456789' })
    document_number: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '+1234567890' })
    phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'john.doe@example.com' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: '123 Main St, City, Country' })
    address: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
