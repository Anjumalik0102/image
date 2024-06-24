
import { useState } from "react";

import styles from "@/styles/Product.module.css";


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
    const [rightImages, setRightImages] = useState([
        {
            value: undefined,
            id: 6,
        },
        {
            value: undefined,
            id: 7,
        },
        {
            value: undefined,
            id: 8,
        },
        {
            value: undefined,
            id: 9,
        },
        {
            value: undefined,
            id: 10,
        }
    ])

    const [dragging, setDragging] = useState(false);

    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setDragging(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedItemId = e.dataTransfer.getData('text/plain');
        const droppedItem = document.getElementById(droppedItemId);
        e.target.appendChild(droppedItem);
        setDragging(true);

    };

    const dropzoneClasses = `${styles.dropzone} ${dragging ? styles.dragging : ''}`;


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


        const newArray2 = rightImages.map((data) => {
            if (data.id === elementId) {
                return {
                    ...data,
                    value: URL.createObjectURL(e.target.files[0])
                }
            } else {
                return data
            }
        })
        setImages(newArray)
        setRightImages(newArray2)

    }



    const uploadFileOnClick = (e) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*, video/*';
        input.id = e.target.id

        input.addEventListener('change', (e) => onFileChange(e));


        input.click();
    }




    return (
        <>
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
                                            className={styles.image1}>
                                            <video
                                            controls={false}
                                                className={styles.draggable}
                                                // onDragStart={handleDragStart}
                                                // onDragOver={handleDragOver}
                                                // onDrop={handleDrop}
                                           
                                                onClick={(e) => {
                                                    setSelectedElement(image)
                                                    console.log(e)
                                                }
                                                }
                                                src={image.value}
                                                id={image.id}
                                                style={{ width: "100px", height: "100px" }}
                                            />



                                        </div>
                                    )
                                } else {
                                    return (
                                        <div
                                            key={image.id}
                                            className={styles.image1}>

                                            <img
                                                className={styles.draggable}
                                                // onDragOver={handleDragOver}
                                                // onDrop={handleDrop}
                                                alt="Draggable Image"
                                                // onDragStart={handleDragStart}
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
                                <video
                                    // poster="/images/w3html5.gif"
                                    className={styles.draggable}
                                    // onDragStart={handleDragStart}
                                    controls
                                    onClick={(e) => {
                                        console.log(e)
                                    }
                                    }
                                    src={selectedElement.value}
                                    id={selectedElement.id}
                                />
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


                    </div>




                </div>
                <div className={styles.rightImageDiv}>

                    {
                        rightImages.map((rightImages) => {
                            if (rightImages.value) {
                                return (
                                    <div className={styles.images1}
                                        key={rightImages.id}>
                                        <img
                                            id={rightImages.id}
                                            src={rightImages.value}
                                            onClick={uploadFileOnClick}

                                            style={{

                                                overflow: "hidden",
                                                height: "auto",
                                                width: '100px',
                                                objectFit: "cover"
                                            }} />


                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div
                                        key={rightImages.id}
                                        className={styles.image1}>
                                        <span id={rightImages.id} onClick={uploadFileOnClick}>upload</span>
                                    </div>
                                )
                            }
                        }
                        )
                    }


                    <div className={styles.image1}

                        style={{
                            position: 'absolute',
                            border: ' 1px solid red',

                            top: '25%',
                            left: '62%',
                            height: '80%',
                            width: '33%'
                        }}></div>


                </div>
            </div>

        </>
    );
}