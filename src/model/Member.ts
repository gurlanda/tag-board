class Member {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  clone(): Member {
    return new Member(this._name);
  }
}

export default Member;
