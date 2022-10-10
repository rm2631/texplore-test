import FootTile from './FootTile';
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

function FootTileGroup({data, setSelectedItem}) {

    var data_array = data.map(function(item){
      return <FootTile key={item.key} data={item} setSelectedItem={setSelectedItem}/>
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