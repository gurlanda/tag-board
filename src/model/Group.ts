import Member from './Member';

class Group {
  private _members: Member[];
  private _index: number;

  constructor(index: number, members: Member[] = []) {
    this._index = index;
    this._members = members.map((m) => m.clone());
  }

  get members(): Member[] {
    return this._members.map((m) => m.clone());
  }

  get index(): number {
    return this._index;
  }

  clone(): Group {
    return new Group(this._index, this._members);
  }
}

export default Group;
