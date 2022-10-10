import Tag from './Tag';

function Tile({data}) {
   
    var tags = data.tags.map(function(item, index){
      return <Tag key={index} data={item}/>
    })

    return (
        <div>
          <div className='tags-box'>
            {tags}
          </div>
          <div className='tiles-meta'>
            <h6>Partagé par {data.user}</h6>
            <h6>{data.date}</h6>
          </div>
          <p className="card-text">{data.text}</p>
        </div>
    );
  }
  
export default Tile;