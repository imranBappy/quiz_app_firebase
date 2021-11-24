import { query } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const useGetVideo = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideo = async () => {
      let newVideo = [];
      const db = getFirestore();
      try {
        const q = query(collection(db, "videos"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          newVideo = [...newVideo, doc.data()];
        });
        setVideos(newVideo);
      } catch (error) {
        console.log(error);
      }
    };
    getVideo();
  }, []);
  return videos;
};

export default useGetVideo;
