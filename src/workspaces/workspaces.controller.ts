import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkSpaces() {}

  @Post()
  createWorkSpace() {}

  @Get(':url/members')
  getAllMembersFromWorkSpace() {}

  @Post(':url/members')
  inviteMembersToWorkSpace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkSpace() {}

  @Get('url/users/:id')
  getMemberInfoInWorkSpace() {}
}
