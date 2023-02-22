import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  public email: string;

  public nickname: string;
  @ApiProperty({
    example: 'nodeks',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
