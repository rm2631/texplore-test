import { Button } from 'bootstrap';
import Tile from './Tile';


function HeadTile({ selectedTile, setselectedTile }) {
  return (
    <div>
      <div className="headtile-card card border-0 shadow mb-4">
        <div className="card-body">
          <button type="button" className="btn-close btn-close close-button" aria-label="Close" onClick={() => setselectedTile(null)}></button>
          <Tile data={selectedTile} />
        </div>
      </div>
    </div>
  );
}

export default HeadTile;