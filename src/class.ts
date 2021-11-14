export class User {
  private _username: string = ''
  phone: string = 'sfddf'
  constructor(public name: string) {

  }

  a(name: string) {
    const nama = name
  }

  set username(newUsername: string) {
    this._username = newUsername
  }

  get username(): string {
    return this._username
  }
}

class Heldi extends User {
  constructor(public usia: number, public name: string) {
    super(name)
  }
}

let user = new Heldi(32, 'ghj')
user.username = 'dsds'
console.log(user.username)