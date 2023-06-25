import { useContext } from 'react';
import Member from 'src/model/Member';

import AreaContext from 'src/context/AreaContext';
import Container from './Container';

const MemberView = ({
  data,
  areaIndex,
  groupIndex,
  className,
}: {
  data: Member;
  areaIndex: number;
  groupIndex: number;
  className?: string;
}): JSX.Element => {
  const areaContext = useContext(AreaContext);
  if (areaContext === null) {
    return <></>;
  }

  const { setMemberFlipState } = areaContext;

  function toggleClickState(): void {
    const { flipState, id } = data;
    if (flipState === 'Unclicked') {
      setMemberFlipState(areaIndex, groupIndex, id, 'Clicked');
    } else if (flipState === 'Clicked') {
      setMemberFlipState(areaIndex, groupIndex, id, 'Warning');
    } else {
      setMemberFlipState(areaIndex, groupIndex, id, 'Warning');
    }
  }

  function clickStateClassNames(): string {
    const flipState = data.flipState;
    if (flipState === 'Unclicked') {
      return 'bg-transparent';
    } else if (flipState === 'Clicked') {
      return 'bg-green-200';
    } else {
      return 'bg-red-200';
    }
  }

  return (
    <Container
      className={`flex justify-center items-center text-center ${clickStateClassNames()} ${className}`}
      isClickable
      onClick={toggleClickState}
    >
      {data.name}
    </Container>
  );
};

export default MemberView;
