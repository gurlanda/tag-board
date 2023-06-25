import React from 'react';
import Area from 'src/model/Area';
import Group from 'src/model/Group';
import { useState } from 'react';
import Member from 'src/model/Member';

const Container = ({
  isClickable,
  onClick,
  className,
  children,
}: {
  isClickable?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
}): JSX.Element => {
  const clickableStyles = 'cursor-pointer';

  return (
    <div
      className={`px-4 py-2 border border-gray-400 rounded-xl ${
        isClickable ? clickableStyles : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const MemberView = ({
  data,
  className,
}: {
  data: Member;
  className?: string;
}): JSX.Element => {
  type ClickState = 'Unclicked' | 'Clicked' | 'Warning';
  const [clickState, setClickState] = useState<ClickState>('Unclicked');

  function toggleClickState(): void {
    if (clickState === 'Unclicked') {
      setClickState('Clicked');
    } else if (clickState === 'Clicked') {
      setClickState('Warning');
    } else {
      setClickState('Unclicked');
    }
  }

  function clickStateClassNames(): string {
    if (clickState === 'Unclicked') {
      return 'bg-transparent';
    } else if (clickState === 'Clicked') {
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

const GroupView = ({
  data,
  className,
}: {
  data: Group;
  className?: string;
}): JSX.Element => {
  return (
    <Container
      className={`flex flex-col gap-2 py-5 [user-select:none] ${className}`}
    >
      <h2 className="font-bold text-xl text-center">{`Group ${data.index}`}</h2>

      {
        // MemberViews
        data.members.map((member, index) => (
          <MemberView data={member} key={index} />
        ))
      }
    </Container>
  );
};

const AreaView = ({
  data,
  className,
}: {
  data: Area;
  className?: string;
}): JSX.Element => {
  return (
    <Container className={`flex flex-col gap-4 py-5 ${className}`}>
      <h1 className="font-bold text-xl text-center">{`Area ${data.index}`}</h1>

      <div className="flex gap-2">
        {
          // GroupViews
          data.groups.map((group, index) => (
            <GroupView data={group} className="basis-0 grow" key={index} />
          ))
        }
      </div>
    </Container>
  );
};

export default AreaView;
