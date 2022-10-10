import FootTile from './FootTile';
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 5,
  1400: 1
};

function FootTileGroup({data, setselectedTile}) {

    var data_array = data.map(function(item){
      return <FootTile key={item.key} data={item} setselectedTile={setselectedTile}/>
    })

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data_array}
      </Masonry>
    );
  }
  
export default FootTileGroup;