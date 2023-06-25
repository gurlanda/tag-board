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

  clone(): Area {
    return new Area(this._index, this._groups);
  }
}

export default Area;
