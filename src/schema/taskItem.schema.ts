import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema()
export class TaskItem {
  @Prop()
  title: string;
  @Prop()
  assignee: string;
  @Prop()
  created: Date;
  @Prop()
  status: string;
}
export type TaskDocument = HydratedDocument<TaskItem>;
export const TaskItemSchema = SchemaFactory.createForClass(TaskItem);
