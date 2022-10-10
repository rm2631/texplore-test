import Tile from './Tile';


function HeadTile({selectedTile: selectedTile}) {
    return (  
      <div>
        <div className="headtile-card card m-2">
          <div className="card-body">
            <Tile data={selectedTile} />
          </div>
        </div>
      </div>
    );
  }
  
export default HeadTile;