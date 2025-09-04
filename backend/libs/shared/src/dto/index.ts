import { IsString, IsEmail, IsOptional, MinLength, IsEnum, IsNumber, IsArray, IsBoolean } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Role, CourseLevel } from '@prisma/client';

// Auth DTOs
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role = Role.USER;
}

// Course DTOs
export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  @Type(() => Number)
  price: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  originalPrice?: number;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsEnum(CourseLevel)
  level: CourseLevel;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  badge?: string;

  @IsArray()
  @IsString({ each: true })
  whatYouWillLearn: string[];

  @IsArray()
  @IsString({ each: true })
  requirements: string[];
}

export class UpdateCourseDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsOptional()
  @IsString()
  duration?: string;

  @IsOptional()
  @IsEnum(CourseLevel)
  level?: CourseLevel;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  badge?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  whatYouWillLearn?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  requirements?: string[];
}

// Pagination DTO
export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  sort?: string;

  @IsOptional()
  @IsEnum(['asc', 'desc'])
  order?: 'asc' | 'desc' = 'desc';
}