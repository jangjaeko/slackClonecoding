import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsService } from './channels/channels.service';
import { ChannelsController } from './channels/channels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    WorkspacesModule,
    ChannelsModule,
    DmsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'jaeho',
      password: 'wkdwogh4',
      database: 'slackclone',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ChannelsController],
  providers: [AppService, ChannelsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
