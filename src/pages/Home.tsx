import { useContext } from 'react';
import AreaView from 'src/components/AreaView';
import Container from 'src/components/Container';
import AreaContext from 'src/context/AreaContext';

const Home = ({}: {}): JSX.Element => {
  const areaContext = useContext(AreaContext);
  if (!areaContext) {
    return <></>;
  }

  const { areas, currentAreaIndex, setCurrentArea } = areaContext;

  function onClickFactory(areaIndex: number) {
    return () => {
      setCurrentArea(areaIndex);
    };
  }

  return (
    <div className="pt-10">
      <div className="flex flex-col gap-5 max-w-[90%] mx-auto">
        <div className="flex justify-center gap-2">
          {areas.map((area, index) => (
            <Container
              key={index}
              className="font-bold"
              isClickable
              onClick={onClickFactory(index)}
            >{`Area ${area.index}`}</Container>
          ))}
        </div>
        <AreaView data={areas[currentAreaIndex]} />
      </div>
    </div>
  );
};

export default Home;
