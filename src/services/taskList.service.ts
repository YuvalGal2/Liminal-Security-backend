import { Injectable } from '@nestjs/common';
import { TaskDocument } from '../schema/taskItem.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from "../models/task.model";
@Injectable()
export class TaskListService {
  constructor(@InjectModel('task') private listModel: Model<TaskDocument>) {}
  async getListData(): Promise<any> {
    const result = await this.listModel.find();
    return result;
  }

  async insertTask(payload: any): Promise<Task[]> {
    await this.listModel.create(payload);
    return this.getListData();
  }
  async updateTask(payload: any): Promise<Task[]>  {
    const res = await this.listModel.updateOne(
      { _id: payload._id },
      {
        $set: {
          status: payload.status,
          assignee: payload.assignee,
          title: payload.title,
        },
      },
    );
    if (res.acknowledged) {
      return this.getListData();
    } else {
      throw Error(`failed to update task: ${payload._id} `);
    }
  }
  async deleteTask(id: any): Promise<Task[]>  {
    const res = await this.listModel.updateOne(
      { _id: id },
      { $set: { status: 'Done' } },
    );
    if (res.acknowledged) {
      return this.getListData();
    } else {
      throw Error(`failed to delete task: ${id} `);
    }
  }
}
