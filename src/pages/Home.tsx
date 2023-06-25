import AreaView from 'src/components/AreaView';
import areas from 'src/model/testData';

const Home = ({}: {}): JSX.Element => {
  const [area1, area2] = areas;
  return (
    <div className="pt-10">
      <div className="flex flex-col gap-5 max-w-[90%] mx-auto">
        <AreaView data={area1} />
        <AreaView data={area2} />
      </div>
    </div>
  );
};

export default Home;
