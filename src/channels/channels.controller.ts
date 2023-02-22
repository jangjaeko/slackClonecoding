import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannel() {}
  @Post()
  createChannel() {}
  @Get(':name')
  getSpecificChannel() {}
  @Get(':name/chats')
  getChat(@Query() query) {
    console.log(query.perPage, query.page);
  }

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
