

import { useState } from "react";
import styles from "@/styles/Product.module.css";

export default function ProductComponent() {
  const [images, setImages] = useState([
    { value: undefined, id: 1 },
    { value: undefined, id: 2 },
    { value: undefined, id: 3 },
    { value: undefined, id: 4 },
    { value: undefined, id: 5 },
  ]);

  const [rightImages, setRightImages] = useState([
    { value: undefined, id: 6 },
    { value: undefined, id: 7 },
    { value: undefined, id: 8 },
    { value: undefined, id: 9 },
    { value: undefined, id: 10 },
  ]);

  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData("text/plain");
    const droppedItem = document.getElementById(droppedItemId);
    e.target.appendChild(droppedItem);
    setDragging(false); // Reset dragging state after drop
  };

  const onFileChange = (e, id, isRightImage) => {
    const newArray = isRightImage
      ? rightImages.map((img) =>
          img.id === id
            ? { ...img, value: URL.createObjectURL(e.target.files[0]) }
            : img
        )
      : images.map((img) =>
          img.id === id
            ? { ...img, value: URL.createObjectURL(e.target.files[0]) }
            : img
        );
    isRightImage ? setRightImages(newArray) : setImages(newArray);
  };

  const uploadFileOnClick = (e) => {
    const input = document.createElement("input");
    input.type = "file";
    input.id = e.target.id;
    input.addEventListener("change", (e) =>
      onFileChange(e, parseInt(e.target.id), e.target.id >= 6)
    );
    input.click();
  };

  return (
    <div className={styles.home}>
      {/* Left Image Div */}
      <div className={styles.leftImageDiv}>
        {images.map((image) => (
          <div
            key={image.id}
            className={styles.image1}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image.value ? (
              <img
                id={image.id}
                src={image.value}
                alt="Image"
                className={styles.draggable}
                draggable="true"
                onDragStart={handleDragStart}
                onClick={uploadFileOnClick}
              />
            ) : (
              <span id={image.id} onClick={uploadFileOnClick}>
                Upload
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Right Image Div */}
      <div className={styles.rightImageDiv}>
        {rightImages.map((rightImage) => (
          <div
            key={rightImage.id}
            className={styles.images1}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {rightImage.value ? (
              <img
                id={rightImage.id}
                src={rightImage.value}
                alt="Image"
                onClick={uploadFileOnClick}
                style={{ objectFit: "cover", width: "100px", height: "auto" }}
              />
            ) : (
              <span id={rightImage.id} onClick={uploadFileOnClick}>
                Upload
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


