import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { storage } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ProfileCard() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <Avatar src={url} sx={{ width: 150, height: 150 }} />
      <label for="upload-photo">Add profile image</label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="butcir" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ProfileCard;