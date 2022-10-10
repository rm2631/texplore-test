import HeadTile from './HeadTile';
import FootTileGroup from './FootTileGroup';
import React, { useState } from "react";

export var data_hard = [
  {
    "key": "634469bae5c1bda3a16d6b34",
    "guid": "ac8d9483-40c0-4503-b373-d8865cf3969b",
    "user": "jeremy.moreau@ivanhoecambridge.com",
    "text": "Exercitation quis sint ullamco nulla duis dolor veniam eu incididunt anim. Ut adipisicing quis adipisicing ipsum voluptate proident sit. Fugiat duis ad qui sint non. Officia occaecat consequat nulla do cillum. Magna aute reprehenderit sunt labore et. Labore culpa fugiat consequat anim non incididunt duis magna exercitation ullamco quis consectetur irure. Sit aute velit ullamco quis non proident voluptate sunt reprehenderit ut.\r\n",
    "date": "2021-05-23T04:35:42 +04:00",
    "tags": [
      {
        "entity": "exercitation",
        "category": "Location"
      }
    ]
  },
  {
    "key": "634469bac3c83e2692f1d0ef",
    "guid": "070f4dd9-dcc3-4857-bcf9-abff73236e48",
    "user": "simon.lauzier@ivanhoecambridge.com",
    "text": "Fugiat tempor exercitation magna aliquip. Mollit ad non reprehenderit ullamco. Dolore magna est sit consectetur nisi enim elit ullamco.\r\n",
    "date": "2021-11-12T04:57:38 +05:00",
    "tags": [
      {
        "entity": "in",
        "category": "Product"
      },
      {
        "entity": "aute",
        "category": "Organization"
      },
      {
        "entity": "in",
        "category": "Product"
      }
    ]
  },
  {
    "key": "634469bafbe9149858923d37",
    "guid": "35bf4d65-feed-4d8a-a0c2-192f1e18158f",
    "user": "jeremy.moreau@ivanhoecambridge.com",
    "text": "Aliquip consectetur commodo consectetur aliquip fugiat in nostrud officia officia. Lorem est sit consequat eu. Aute sunt voluptate commodo amet. Lorem sunt veniam sunt in. Do exercitation laboris deserunt culpa laboris.\r\n",
    "date": "2019-07-29T07:57:24 +04:00",
    "tags": [
      {
        "entity": "occaecat",
        "category": "Organization"
      },
      {
        "entity": "cupidatat",
        "category": "Location"
      },
      {
        "entity": "nostrud",
        "category": "Location"
      }
    ]
  },
  {
    "key": "634469ba0bdcc4e6380ebab5",
    "guid": "4718530f-88fc-4cb5-b1ac-b3c628d1c081",
    "user": "simon.lauzier@ivanhoecambridge.com",
    "text": "Enim magna dolor nisi aute tempor consequat cillum. Occaecat culpa sint excepteur incididunt ut sint. Consequat est laboris ad ex deserunt enim. Laborum laboris est voluptate et officia tempor. Cillum officia non nostrud non labore nulla Lorem dolore ipsum ex proident proident est.\r\n",
    "date": "2020-02-25T11:36:30 +05:00",
    "tags": [
      {
        "entity": "amet",
        "category": "Location"
      },
      {
        "entity": "reprehenderit",
        "category": "Product"
      },
      {
        "entity": "sunt",
        "category": "Product"
      }
    ]
  },
  {
    "key": "634469ba4422a61ed2b9efea",
    "guid": "e59c249a-30c7-4509-9bb3-54e5aca07686",
    "user": "simon.lauzier@ivanhoecambridge.com",
    "text": "Velit reprehenderit velit laborum occaecat proident cillum sunt exercitation eu est. Ut consequat aute non incididunt enim dolore minim in. Et proident consequat aliqua duis consequat aliqua tempor.\r\n",
    "date": "2021-04-23T12:35:54 +04:00",
    "tags": [
      {
        "entity": "laboris",
        "category": "Organization"
      },
      {
        "entity": "officia",
        "category": "Location"
      },
      {
        "entity": "aute",
        "category": "Organization"
      }
    ]
  }
]


function BillBoard() {
  const [selectedItem, setSelectedItem] = useState(null);

  if (selectedItem) {
    var headtile = <HeadTile selectedItem={selectedItem}/>
  }

  return (
    <div className="m-5">
      <div>
        {headtile}
      </div>
      <div>
        <FootTileGroup data={data_hard} setSelectedItem={setSelectedItem}/>
      </div>
    </div>
  );
}

export default BillBoard;