import GeneralComponent from "./General"
import ProductComponent from "./Product"
import AttributesComponent from "./Attributes"
import styles from "@/styles/GiftPortal.module.css"
import { useState } from "react"
export default function GiftPortalComponent() {
    const [activeComponent, setActiveComponent] = useState('general')

    const handleClick = (componentName) => {
       
        setActiveComponent(componentName);
    };


    return (
        <>
            <div className={styles.mainGiftPortal}>
                <div className={styles.navbarGift}>
                    <div className={styles.innerNavbarGift}>
                    <p 
                        className={`${styles.navContent} ${activeComponent === 'general' ? styles.activeNavContent : ''}`}
                        onClick={() => handleClick('general')}
                    >
                        General Information
                    </p>
                    <p 
                        className={`${styles.navContent} ${activeComponent === 'images' ? styles.activeNavContent : ''}`}
                        onClick={() => handleClick('images')}
                    >
                        Product Images
                    </p>

                    <p 
                        className={`${styles.navContent} ${activeComponent === 'attributes' ? styles.activeNavContent : ''}`}
                        onClick={() => handleClick('attributes')}
                    >
                        Attributes
                    </p>
                        
                      
                     

                    </div>
                </div>

                {activeComponent === 'general' && <GeneralComponent />}
                {activeComponent === 'images' && <ProductComponent />}
                {activeComponent === 'attributes' && <AttributesComponent />}
            </div>

        </>
    )
}