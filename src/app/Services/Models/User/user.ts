import { RoleModel } from '../../Role/role-model.enum';

export class User {
  Id: number;
  UserName: string;
  UserPassword: string;
  Role: RoleModel;
}
