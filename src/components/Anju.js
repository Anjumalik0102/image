
import { useState, useRef } from "react";

import styles from "@/styles/Product.module.css";
import { FaPlayCircle } from "react-icons/fa";

export default function ProductComponent() {
  const [selectedElement, setSelectedElement] = useState(null)
  const [images, setImages] = useState([
    {
      value: undefined,
      type: '',
      id: 1,
    },
    {
      value: undefined,
      type: '',
      id: 2,
    },
    {
      value: undefined,
      type: '',
      id: 3,
    },
    {
      value: undefined,
      type: '',
      id: 4,
    },
    {
      value: undefined,
      type: '',
      id: 5,
    },
  ])
  const [showIcon, setShowIcon] = useState(true)
  const videoRef = useRef()
  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drag = (ev, id) => {
    ev.dataTransfer.setData("oldId", id.toString());
  }



  const onFileChange = (e) => {
    const elementId = parseInt(e.target.id)

    console.log('e.target.files[0]', e.target.files[0])

    const newArray = images.map((data) => {
      if (data.id === elementId) {
        return {
          ...data,
          value: URL.createObjectURL(e.target.files[0]),
          type: e.target.files[0].type
        }
      } else {
        return data
      }
    })


    setImages(newArray)

  }



  const uploadFileOnClick = (e) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*, video/*';
    input.id = e.target.id

    input.addEventListener('change', (e) => onFileChange(e));


    input.click();
  }

  const drop = (e, id) => {
    // console.log(e.dataTransfer.getData('oldId'), id)
    // e.dataTransfer.getData()

    let id1 = images.filter((data) => data.id == e.dataTransfer.getData('oldId'))
    let id2 = images.filter((data) => data.id == id)

    // let id1 =images[e.dataTransfer.getData('oldId')-1]
    // let id2 = images[id-1]


    const newArr = images.map((data) => {
      if (data.id == id1[0].id) {
        return id2[0]
      } else if (data.id == id2[0].id) {
        return id1[0]
      } else {
        return data
      }

    })

    setImages([...newArr])

  }


  return (
    <>
      {showIcon &&
        <FaPlayCircle onClick={() => {
          console.log(videoRef)
          videoRef.current.play()
        }} />}
      <div className={styles.home}>

        <div className={styles.leftImageDiv}
          style={{
            position: 'relative'
          }}
        >
          {
            images.map((image) => {

              if (image.value) {
                if (image.type.includes('video')) {
                  return (
                    <div
                      key={image.id}
                      className={styles.image1}
                      onDrop={(e) => drop(e, image.id)} onDragOver={allowDrop}
                    >
                      <video
                        draggable="true" onDragStart={(e) => drag(e, image.id)}
                        controls={false}
                        className={styles.draggable}
                        id={image.id}
                        onClick={(e) => {
                          setSelectedElement(image)
                          console.log(e)
                        }
                        }
                        src={image.value}
                        style={{ width: "100px", height: "100px" }}
                      />



                    </div>
                  )
                } else {
                  return (
                    <div
                      key={image.id}
                      className={styles.image1}
                      onDrop={(e) => drop(e, image.id)} onDragOver={allowDrop}
                    >

                      <img
                        draggable="true" onDragStart={(e) => drag(e, image.id)}
                        className={styles.draggable}
                        alt="Draggable Image"
                        id={image.id}
                        src={image.value}
                        onClick={(e) => {
                          setSelectedElement(image)
                          console.log(e)
                        }}
                      />

                    </div>
                  )

                }

              } else {
                return (
                  <div
                    key={image.id}
                    className={styles.image1}>
                    <span id={image.id} onClick={uploadFileOnClick}>upload</span>
                  </div>
                )
              }



            })
          }



          <div className={styles.image2}
            style={{
              position: 'absolute',
              border: ' 1px solid red',
              objectFit: 'cover',
              top: '5%',
              left: '25%',
              height: '90%',
              width: '70%'
            }}

          // onDragOver={handleDragOver}
          // onDrop={handleDrop}
          >

            {selectedElement && selectedElement?.type.includes('video') ?

              <>

                <video controls className={styles.draggable} ref={videoRef}
                  onPlay={() => {
                    setShowIcon(false)
                    console.log('played')
                  }}
                  onPause={() => {
                    setShowIcon(true)
                    console.log('pause')
                  }}
                >
                  <source src={selectedElement.value} type="video/mp4" />
                </video>

              </> : null}

            {selectedElement && selectedElement?.type.includes('image') ?

              <>

                <img

                  className={styles.draggable}
                  alt="Draggable Image"
                  id={selectedElement.id}
                  src={selectedElement.value}
                  onClick={(e) => {
                    console.log(e)
                  }}
                />
              </> : null}
            {showIcon && selectedElement && selectedElement?.type.includes("video") &&
              <FaPlayCircle style={{ bottom: "50%", position: "absolute", color: "white" }} onClick={() => {
                console.log(videoRef)
                videoRef.current.play()
              }} />}

          </div>




        </div>

      </div>

    </>
  );
}
