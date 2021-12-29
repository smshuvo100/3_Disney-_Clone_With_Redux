import React, { useEffect } from "react";
//import React from "react";
import "../styleComponents/Home.css";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useDispatch } from "react-redux";

import { setMovies } from "../features/movieSlice";

import { db } from "../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  //const [loading, setLoading] = React.useState(true);
  //get onSnapshot data by Catagory -recommends,newDisney,originals,trending

  const user = useSelector(selectUser);

  useEffect(() => {
    const getMovies = () => {
      let recommends = [];
      let newDisney = [];
      let originals = [];
      let trending = [];

      onSnapshot(collection(db, "movies"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          if (data.type === "recommend") {
            recommends = [...recommends, { id: doc.id, ...data }];
          } else if (data.type === "new") {
            newDisney = [...newDisney, { id: doc.id, ...data }];
          } else if (data.type === "original") {
            originals = [...originals, { id: doc.id, ...data }];
          } else if (data.type === "trending") {
            trending = [...trending, { id: doc.id, ...data }];
          }
        });

        if (!user) {
          dispatch(
            setMovies({
              recommends: null,
              newDisney: null,
              originals: null,
              trending: null,
            })
          );
        } else {
          dispatch(
            setMovies({
              recommends: recommends,
              newDisney: newDisney,
              originals: originals,
              trending: trending,
            })
          );
        }
      });
    };
    getMovies();
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="home_container">
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Originals />
        <Trending />
      </div>
    </div>
  );
}

export default Home;
