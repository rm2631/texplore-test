function NoData() {
    return (
        <div className='nodata'>
            <img className='nodata-image' src={require('./images/sad_dog.png')} alt='no data' />
            <div>Nous n'avons pas pu trouver de données...</div>
        </div>
    );
}

export default NoData;