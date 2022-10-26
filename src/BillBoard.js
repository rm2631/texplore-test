import HeadTile from './HeadTile';
import FootTileGroup from './FootTileGroup';
import Loading from './Loading';
import NoData from './NoData'
import FilterBar from './FilterBar'
import React, { useState, useEffect } from "react";
import axios from "axios"

function BillBoard() {
  var [selectedTile, setselectedTile] = useState(null);
  var [contentList, setContentList] = useState(null);
  var [loading, setLoading] = useState(false);
  var [footTile, setfootTile] = useState(<></>)

  function loadContentList(selectedTile) {
    if (selectedTile) {
      axios.get(`${process.env.REACT_APP_api_base_url}/contents/${selectedTile.content_id}`).then((response) => {
        setContentList(response.data);
      });
    }
    else {
      axios.get(`${process.env.REACT_APP_api_base_url}/contents/`).then((response) => {
        setContentList(response.data);
      });
    }
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(function () {
      loadContentList(selectedTile);
      setLoading(false)
    }, 500);
  }, [selectedTile]);

  useEffect(() => {
    if (loading) {
      setfootTile(<Loading />)
    }
  }, [loading]);

  useEffect(() => {
    if (contentList?.length > 0) {
      setfootTile(<FootTileGroup data={contentList} setselectedTile={setselectedTile} />)
    }
    else {
      setfootTile(<NoData />)
    }
  }, [contentList]);

  return (
    <div className="m-5">
      {selectedTile ? <HeadTile selectedTile={selectedTile} setselectedTile={setselectedTile} /> : <></>}
      <FilterBar />
      {footTile}
    </div>
  );
}

export default BillBoard;