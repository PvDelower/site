import React from "react";

const CarInfo = ({ User }) => {

  return (
      <section className="auto">
      {/*//   <div className="AVGprice">*/}
      {/*//     <div>Цена</div>*/}
      {/*//     <p align="center">*/}
      {/*//       {car.content_name}*/}
      {/*//     </p>*/}
      {/*//   </div>*/}

        {/*<div className="AVGkm">*/}
        {/*  <p>*/}
        {/*    {User.createdDate}*/}
        {/*  </p>*/}
        {/*</div>*/}

        <div className="AVGkm">
          {/*<p align="center">*/}
          {/*  {car.content_name} год` : 'content'}*/}
          {/*</p>*/}
            <p>{User?.content_name}</p>
            <p>{User?.content_name}</p>

        </div>

        <div className="Folder">
          <p>Работа</p>
        </div>

          <div className="Folder2">
              <p>Здоровье</p>
          </div>

          <div className="Folder3">
              <p>Свадьба</p>
          </div>

        <div id="anycomment-app"/>
      </section>
  )
}

export default CarInfo