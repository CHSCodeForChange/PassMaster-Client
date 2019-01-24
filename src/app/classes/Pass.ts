import {User} from "./User";

export class Pass {
  pk: number ;
  approved: boolean = false;
  date: Date;
  startTimeRequested: Date;
  endTimeRequested: Date;

  timeLeftOrigin: Date;
  timeArrivedDestination: Date;

  student: number = -1;
  originTeacher: number = -1;

  student_info: User; //why do we have this
  originTeacher_info: User;

  description: string = '';

  type: string = 'TeacherPass';
  destination: string = '';

  can_approve: boolean = false;
  can_sign_in: boolean = false;
  can_sign_out: boolean = false;
}
