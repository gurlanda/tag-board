import FlipState from './FlipState';
import Group from './Group';

class Area {
  private _groups: Group[];
  private _index: number;

  constructor(index: number, groups: Group[] = []) {
    this._index = index;
    this._groups = groups.map((g) => g.clone());
  }

  get groups(): Group[] {
    return this._groups.map((g) => g.clone());
  }

  get index(): number {
    return this._index;
  }

  cloneSetMemberFlipState(
    groupIndex: number,
    memberId: string,
    flipState: FlipState
  ): Area {
    const groups = this._groups.map((group) =>
      group.index === groupIndex
        ? group.cloneSetMemberFlipState(memberId, flipState)
        : group.clone()
    );

    return new Area(this._index, groups);
  }

  clone(): Area {
    return new Area(this._index, this._groups);
  }
}

export default Area;
