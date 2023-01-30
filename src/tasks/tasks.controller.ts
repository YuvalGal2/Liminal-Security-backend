import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TaskListService } from '../services/taskList.service';

@Controller('items')
export class TasksController {
  constructor(private listService: TaskListService) {}

  @Get()
  getList() {
    return this.listService.getListData();
  }

  @Delete()
  deleteItem(@Body('id') id) {
    return this.listService.deleteTask(id);
  }

  @Post()
  insertItem(@Body('payload') payload) {
    return this.listService.insertTask(payload);
  }

  @Put()
  updateItem(@Body('payload') payload) {
    return this.listService.updateTask(payload);
  }
}
