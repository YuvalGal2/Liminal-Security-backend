import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { getEnvPath } from './common/helper/env.helper';
import { TaskListService } from './services/taskList.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/home-assignment'),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, TaskListService],
})
export class AppModule {}
