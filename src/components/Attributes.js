
import styles from "@/styles/Attributes.module.css"
export default function AttributesComponent() {
  return (
    <>

     <div className={styles.mainAttribute}>

      <div className={styles.div1}>
       <h4 className={styles.div1Style}> Vendor Price</h4>
      </div>
      <div className={styles.div2}>
      
        <h4 className={styles.div2Style}> Price </h4>
        <h4  className={styles.div2Style}>INR Price</h4>
        <h4  className={styles.div2Style}>Base Price</h4>
        <h4  className={styles.div2Style}>Default</h4>
      </div>
      <div className={styles.div3}><h4 className={styles.heading}>Testing</h4></div>
     
 <div className={styles.eggCategories}>
      <div className={styles.egg}> 
        <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}> &nbsp;&nbsp;Egg</div>
        <div className={styles.inputField1}>
          <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input  className={styles.radioBtn} type="radio" id="eggless" name="fav_cake" value="Egg"/>
        </div>
      </div>
      <div className={styles.eggless}>
      <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}> &nbsp;&nbsp;Eggless</div>
        <div className={styles.inputField1}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input className={styles.radioBtn} type="radio" id="eggless" name="fav_cake" value="Eggless"/>
        </div>
      </div>

      </div>
    
      <div className={styles.bottomDiv}>
      <div className={styles.flavour}><h4 className={styles.heading}>Flavour</h4></div>
     
      <div className={styles.egg}> 
        <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}> &nbsp;&nbsp;Strawberry</div>
        <div className={styles.inputField1}>
          <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input type="radio" id="strawberry" name="fav_cake2" value="Strawberry"/>
        </div>
      </div>
      <div className={styles.eggless}>
      <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}>  &nbsp;&nbsp;Chocolate</div>
        <div className={styles.inputField1}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input type="radio" id="chocolate" name="fav_cake2" value="Chocolate"/>
        </div>
      </div>

      </div>
      <div className={styles.eggless}>
      <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}> &nbsp;&nbsp;Vanilla</div>
        <div className={styles.inputField1}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input type="radio" id="vanilla" name="fav_cake2" value="Vanilla"/>
        </div>
      </div>
      <div className={styles.eggless}>
      <div className={styles.miniEmptyDiv}></div>
        <div className={styles.miniBigDiv}></div>
        <div className={styles.eggText}> &nbsp;&nbsp;Butterscotch</div>
        <div className={styles.inputField1}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField2}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField3}>
        <input
          className={styles.inputField}
             type="text"
              placeholder="0.00&nbsp;"/>
        </div>
        <div className={styles.inputField4}>
        <input type="radio" id="butterscoth" name="fav_cake2" value="Butterscoth"/>
        </div>
       
      </div>

      </div>
      
    

    
     

    </>
  )
}