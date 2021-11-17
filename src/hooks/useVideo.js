import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
const useVideo = () => {
  const [imgURL, setImg] = useState("");
  const sendVideo = async (file, name) => {
    const storage = getStorage();
    const spaceRef = ref(storage, name);
    const result = await uploadBytes(spaceRef, file);
    console.log(result);
  };
  const fileGet = async (name) => {
    const storage = getStorage();
    const listRef = ref(storage, name);
    getDownloadURL(listRef)
      .then((url) => {
        setImg(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };
  return { sendVideo, fileGet, imgURL };
};

export default useVideo;
