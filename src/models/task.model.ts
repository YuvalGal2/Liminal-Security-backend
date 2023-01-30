import { Prop } from "@nestjs/mongoose";

export interface Task {
  id: any;
  title: string;
  assignee: string;
  created: Date;
  status: string;
}
