// Create Users Model Class
export class Users {
    // properties
    public ID: number;
    public username: string = '';
    public email: string = '';
    public password: string ='';
    public is_admin: string = '';

    constructor(ID: number, username: string, email: string, password: string, is_admin: string) {
      this.ID = ID;
      this.username = username;
      this.email = email;
      this.password = password;
      this.is_admin = is_admin;
    }
  }