import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('api/workspaces/:url/dms')
@ApiTags('DM')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한 번에 가져오는 갯수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '한 번에 가져오는 페이지',
  })
  @Get(':id/chats')
  getChat(@Query() query) {
    console.log(query.perPage, query.page);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
