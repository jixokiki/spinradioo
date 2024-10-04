import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios'; // Assuming you're using Axios for API calls

// Function to upload an image to Firebase Storage
const uploadImage = async (file) => {
  const storage = getStorage(); // Initialize Firebase storage
  const storageRef = ref(storage, `images/${file.name}`); // Create a reference for the file

  try {
    // Upload the file to Firebase Storage
    const snapshot = await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded file
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL; // Return the download URL
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error for further handling
  }
};

const UpdateCard = ({ cardId, currentImage }) => {
  const [image, setImage] = useState(currentImage); // Store the current image URL or state

  const handleImageChange = async (e) => {
    const newImage = e.target.files[0]; // Get the selected file
    if (!newImage) return;

    try {
      // Upload the image to Firebase and get the download URL
      const uploadedImageUrl = await uploadImage(newImage);

      // Update the image in the state with the new URL
      setImage(uploadedImageUrl);

      // Make an API call to update the image URL in the database
      await axios.put(`/api/cardlist/${cardId}`, { image: uploadedImageUrl });

      console.log('Image updated successfully!');
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  return (
    <div>
      <img src={image} alt="Card" style={{ width: '100px', height: '100px' }} />
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default UpdateCard;
