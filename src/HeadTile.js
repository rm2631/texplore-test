
function HeadTile({selectedItem}) {
    return (  
      <div>
        <div className="headtile-card card m-2">
          <div className="card-body">
            <h6 className="card-title">{selectedItem.user}</h6>
            <p className="card-text">{selectedItem.text}</p>
          </div>
          <div class="alert alert-primary m-2" role="alert">
            Les données plus bas vont se mettre à jour en fonction cette tuile une fois l'API construite
          </div>
        </div>
        <hr />
      </div>
    );
  }
  
export default HeadTile;