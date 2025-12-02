import { IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  status?: 'pending' | 'completed';
}
