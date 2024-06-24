import Link from 'next/link';
import styles from "@/styles/Home.module.css"
import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
export default function UserComponent() {
    const [isHovered, setIsHovered] = useState(false);
   
    const handleMouseEnter = () => {
      setIsHovered(true);
     
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    const handleBoxMouseEnter = () => {
      setIsHovered(true);
     
    };
  
    const handleBoxMouseLeave = () => {
      setIsHovered(false);
    };
    return (
      <>
     
    <div style={{ position: 'relative' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
       < FaRegUserCircle className={styles.userIcon}/>
      </div>
      {isHovered && (
        <div
        onMouseEnter={handleBoxMouseEnter}
        onMouseLeave={handleBoxMouseLeave}
        className={styles.userBox}>
          <div> <p>Hii Guest</p></div>
           <div>
          <Link style={{textDecoration:"none",}} href="/Login"passHref>
            <div style={{marginRight:"10px" ,marginLeft:"40px"}}>Login &nbsp;|&nbsp;</div>
          </Link>
          </div>
          <div>
          <Link style={{textDecoration:"none"}} href="/Login"passHref>
            <div>Sign Up</div>
          </Link>
          </div>
        </div>
      )}
    </div>

      </>
    )
}