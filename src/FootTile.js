import Tile from './Tile';

function FootTile({ data, setselectedTile }) {

  return (
    <div className="card border-0 shadow foot-card">
      <div className="card-body">
        <Tile data={data} />
        <button type="button" className="btn btn-primary button-padding" onClick={() => setselectedTile(data)}>Explorer</button>
      </div>
    </div>
  );
}

export default FootTile;