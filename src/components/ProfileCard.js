import Avatar from "@mui/material/Avatar";
import { useState,useEffect } from "react";
import { storage } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {MdAdd} from "react-icons/md"

function ProfileCard() {
  const [image, setImage] = useState(null);
  const [link, setLink] = useState(null);

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
            setLink(url);
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
  useEffect(() => {
    setLink(JSON.parse(sessionStorage.getItem("prof")));
  }, []);
  useEffect(() => {
    sessionStorage.setItem("prof", JSON.stringify(link));
  }, [link]);

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center p-4" >
      <Avatar src={link} sx={{ width: 150, height: 150 }} />
      <label for="upload-photo" className="delaccept delup del  mt-2 " style={{ border: "3px solid white", borderRadius: "5px" }}>
                <MdAdd
                  size="2rem"
                  className="ics "
                  
                />Add photo
              </label>
      <input type="file" id="upload-photo" onChange={handleImageChange} />
      <button className="btn del delup delaccept" style={{borderRadius:"24px",width:'20%',backgroundColor:'aliceblue'}} onClick={handleSubmit}>Submit photo</button>
    </div>
  );
}

export default ProfileCard;