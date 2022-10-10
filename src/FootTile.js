import Tag from './Tag';

function FootTile({data, setSelectedItem}) {
   
    var tags = data.tags.map(function(item, index){
      return <Tag key={index} data={item}/>
    })

    return (
      <div className="card m-2">
        <div className="card-body">
          <div className='tags-box'>
            {tags}
          </div>
          <h6 className="card-title">{data.user}</h6>
          <p className="card-text">{data.text}</p>
          <button type="button" className="btn btn-danger" onClick={() => setSelectedItem(data)}>Analyse moi!</button>
        </div>
      </div>
      
    );
  }
  
export default FootTile;