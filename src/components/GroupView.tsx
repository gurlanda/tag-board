import Group from 'src/model/Group';
import Container from './Container';
import MemberView from './MemberView';

const GroupView = ({
  data,
  areaIndex,
  className,
}: {
  data: Group;
  areaIndex: number;
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
          <MemberView
            data={member}
            areaIndex={areaIndex}
            groupIndex={data.index}
            key={index}
          />
        ))
      }
    </Container>
  );
};

export default GroupView;
