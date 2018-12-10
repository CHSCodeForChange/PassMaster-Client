import {User} from "./User";

export class Pass {
  pk: number;
  approved: boolean;
  date: Date;
  startTimeRequested: Date;
  endTimeRequested: Date;

  timeLeftOrigin: Date;
  timeArrivedDestination: Date;

  student: User;
  originTeacher: User;

  student_info: User; //why do we have this
  originTeacher_info: User;

  description: string;

  type: string;
  destination: string; //not too sure about this one

  can_approve: boolean;
  can_sign_in: boolean;
  can_sign_out: boolean;
}
