import Area from 'src/model/Area';
import Container from './Container';
import GroupView from './GroupView';

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

      <div className="flex flex-col md:flex-row gap-2">
        {
          // GroupViews
          data.groups.map((group, index) => (
            <GroupView
              data={group}
              areaIndex={data.index}
              className="basis-0 grow"
              key={index}
            />
          ))
        }
      </div>
    </Container>
  );
};

export default AreaView;
