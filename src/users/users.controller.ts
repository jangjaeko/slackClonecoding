import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './Dto/Join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    return this.usersService.postUsers(
      data.email,
      data.nickname,
      data.password,
    );
  }
  @Post('login')
  logIn() {}
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
