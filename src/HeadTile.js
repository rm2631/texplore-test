
function HeadTile({selectedTile: selectedTile}) {
    return (  
      <div>
        <div className="headtile-card card m-2">
          <div className="card-body">
            <h6>{selectedTile.date}</h6>
            <p className="card-text">{selectedTile.text}</p>
            <h6>Partagé par {selectedTile.user}</h6>
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