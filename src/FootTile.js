import Tag from './Tag';
import Tile from './Tile';

function FootTile({data, setselectedTile}) {
   
    var tags = data.tags.map(function(item, index){
      return <Tag key={index} data={item}/>
    })

    return (
      <div className="card m-2">
        <div className="card-body">
          <Tile data={data}/>
          <button type="button" className="btn btn-danger button-padding" onClick={() => setselectedTile(data)}>Analyse moi!</button>
        </div>
      </div>
      
    );
  }
  
export default FootTile;