export class User {
  id: number
  name: string;
  phone: string;
  email: string;
  birth_date: string;
  civil_status: number;

  constructor(id: number, name: string, phone: string, email: string, birth_date: string, civil_status: number) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.birth_date = birth_date;
    this.civil_status = civil_status
  }
}

export const CIVIL_STATES: { [key: number]: string } = {
  0: "No definido",
  1: "Soltero/a",
  2: "Casado/a"
}
