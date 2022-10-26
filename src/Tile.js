import Tag from './Tag';

function Tile({ data }) {

  var tags = data.entities.map(function (entity, index) {
    return <Tag key={index} data={entity} />
  })

  return (
    <div>
      {tags ? <div className='tags-box'>{tags}</div> : <></>}
      <h6>{data.content_date}</h6>
      <p className="card-text">{data.content}</p>
      <h6>Partagé par {data.app_user_name}</h6>
    </div >
  );
}

export default Tile;