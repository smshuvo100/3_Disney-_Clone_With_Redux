import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import "../styleComponents/Detail.css";

function Detail() {
  let { id } = useParams();
  //console.log(id);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    //firebase 9 get data by id in single page
    onSnapshot(doc(db, "movies/" + id), (snapshot) => {
      const data = snapshot.data();
      setDetailData(data);
    });
  }, [id]);

  return (
    <div className="detail">
      <div className="detail__container">
        <div className="detail__background">
          <img alt={detailData.title} src={detailData.backgroundImg} />
        </div>
        <div className="detail__imageTitle">
          <img alt={detailData.title} src={detailData.titleImg} />
        </div>
        <div className="detail__contentMeta">
          <div className="detail__controls">
            <button className="detail__player">
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </button>
            <button className="detail__trailer">
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </button>
            <div className="detail__addList">
              <span className="span__1" />
              <span className="span__2" />
            </div>
            <div className="detail__groupWatch">
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="detail__subTitle">{detailData.subTitle}</div>
          <div className="detail__description">{detailData.description}</div>
        </div>
      </div>

      {/*  <h1>{detailData.title}</h1>
      <h1>{detailData.description}</h1>
      <h1>{detailData.subTitle}</h1>
      <h1>{detailData.titleImg}</h1>
      <h1>{detailData.backgroundImg}</h1> */}
    </div>
  );
}

export default Detail;
