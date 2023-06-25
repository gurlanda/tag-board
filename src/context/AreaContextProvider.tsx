import React, { useState } from 'react';
import AreaContext from './AreaContext';
import Area from 'src/model/Area';
import areaData from 'src/model/testData';
import FlipState from 'src/model/FlipState';

const AreaContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [areas, setAreas] = useState<Area[]>(areaData);
  const [currentAreaIndex, setCurrentAreaIndex] = useState<number>(0);

  function setCurrentArea(arrayIndex: number): void {
    if (arrayIndex < 0 || arrayIndex >= areas.length) {
      return;
    }

    setCurrentAreaIndex(arrayIndex);
  }

  function setMemberFlipState(
    areaIndex: number,
    groupIndex: number,
    memberId: string,
    flipState: FlipState
  ): void {
    const newAreas = areas.map((area) =>
      area.index === areaIndex
        ? area.cloneSetMemberFlipState(groupIndex, memberId, flipState)
        : area.clone()
    );

    console.dir({
      areaIndex,
      groupIndex,
      memberId,
      flipState,
      newAreas,
    });

    setAreas(newAreas);
  }

  return (
    <AreaContext.Provider
      value={{ areas, currentAreaIndex, setCurrentArea, setMemberFlipState }}
    >
      {children}
    </AreaContext.Provider>
  );
};

export default AreaContextProvider;
