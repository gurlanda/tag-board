import FlipState from './FlipState';
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

  cloneSetMemberFlipState(id: string, flipState: FlipState): Group {
    const members = this._members.map((member) =>
      member.id === id ? member.cloneSetFlipState(flipState) : member.clone()
    );

    return new Group(this.index, members);
  }

  clone(): Group {
    return new Group(this._index, this._members);
  }
}

export default Group;
