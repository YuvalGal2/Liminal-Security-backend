import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListService } from '../services/taskList.service';
import { TaskItemSchema } from '../schema/taskItem.schema';
import { TasksController } from './tasks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'task', schema: TaskItemSchema }]),
  ],
  controllers: [TasksController],
  providers: [TaskListService],
  exports: [TaskListService, MongooseModule],
})
export class TasksModule {}
