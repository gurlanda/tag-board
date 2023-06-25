import React from 'react';
import Area from 'src/model/Area';
import FlipState from 'src/model/FlipState';

export interface AreaContextInterface {
  areas: Area[];
  currentAreaIndex: number;
  setCurrentArea(arrayIndex: number): void;
  setMemberFlipState(
    areaIndex: number,
    groupIndex: number,
    memberId: string,
    flipState: FlipState
  ): void;
}

const AreaContext = React.createContext<AreaContextInterface | null>(null);

export default AreaContext;
