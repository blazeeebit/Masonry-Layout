import { Masonry } from "@mui/lab";
import Cards from "./Components/Cards";

function App() {

  const heights = [
    100, 200, 350, 250, 400, 300, 450, 200, 100, 300, 400
  ]

  return (
    <div className="flex flex-col">
      <div 
      className="bg-red-400 flex justify-center py-5 font-bold text-white">
        Masonry Layout
      </div>
      <div className="flex justify-center">
        <div className="w-8/12 bg-white py-5">
          <Masonry columns={4}>
            <Cards data={heights} />
          </Masonry>
        </div>
      </div>
    </div>
  );
}

export default App;
