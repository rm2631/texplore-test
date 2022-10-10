import Tag from './Tag';

function FootTile({data, setselectedTile}) {
   
    var tags = data.tags.map(function(item, index){
      return <Tag key={index} data={item}/>
    })

    return (
      <div className="card m-2">
        <div className="card-body">
          <div className='tags-box'>
            {tags}
          </div>
          <div className='tiles-meta'>
            <h6>Partagé par {data.user}</h6>
            <h6>{data.date}</h6>
          </div>
          <p className="card-text">{data.text}</p>
          <button type="button" className="btn btn-danger" onClick={() => setselectedTile(data)}>Analyse moi!</button>
        </div>
      </div>
      
    );
  }
  
export default FootTile;