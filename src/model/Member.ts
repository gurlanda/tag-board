import FlipState from './FlipState';
import createId from 'src/util/createId';
class Member {
  private _name: string;
  private _flipState: FlipState;
  private _id: string;

  constructor(name: string, flipState: FlipState = 'Unclicked', id?: string) {
    this._name = name;
    this._flipState = flipState;

    if (id !== undefined) {
      this._id = id;
    } else {
      this._id = createId();
    }
  }

  get name(): string {
    return this._name;
  }

  get flipState(): FlipState {
    return this._flipState;
  }

  get id(): string {
    return this._id;
  }

  cloneSetFlipState(flipState: FlipState): Member {
    return new Member(this._name, flipState, this._id);
  }

  clone(): Member {
    return new Member(this._name, this._flipState, this._id);
  }
}

export default Member;
