import styles from "@/styles/Home.module.css"
import Link from 'next/link';
import { PiCopyrightLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import UserComponent from "./UserIcon";
export default function HomeComponent() {
  return (
    <>
      <div className={styles.mainHomeDiv}>
        <div className={styles.mainNavbar}>

          < UserComponent className={styles.userDiv} />

        </div>
        <div className={styles.subNavbar}>
          <div className={styles.subNavbarLogo}>
            <img className={styles.logo} src=" https://citeex.com/Images/citeex-tm.png" />
          </div>
          <div className={styles.subNavbarList}>
            <div className={styles.linksContainer}>
              <div className={styles.links}>
                <Link style={{ textDecoration: "none", fontSize: "18px" }} href="/About" passHref>
                  <div> About </div>

                </Link>
              </div>
              <div className={styles.links}>
                <Link style={{ textDecoration: "none", fontSize: "18px" }} href="/Contact" passHref>
                  <div> Contact </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.animation}></div>
          <div className={styles.buttonBanner}>
            <Link href="/Login" passHref>   <button className={styles.searchButton} >Create Free Account</button>
            </Link>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyHeading}>
            <h4>  Your Ultimate Cloud Software for Effortless</h4>
            <h4>Citing and Referencing</h4>
          </div>
          <div className={styles.mainParaDiv}>
            <p className={styles.paraBody}>
              CiteExTM is the groundbreaking cloud-based platform that takes the stress out of managing reading, writing, citing and referencing in your academic and professional projects. With its state-of-the-art automation features, inbuilt text reader, and powerful text editor, CiteExTM redefines the way you approach research and writing. Collaborate seamlessly with fellow researchers, import your documents in PDF and Word formats, and enjoy the flexibility of exporting your written work in both Word and PDF formats for further editing. Our editor boasts advanced capabilities, including header creation and image citation support, making it the go-to tool for streamlined research and writing.
            </p>


          </div>
          <div className={styles.bodyImage}>
            <div className={styles.imageDiv}>
              <img className={styles.screenshoot} src="https://citeex.com/Images/image_slide1.jpg"></img>
            </div>
            <div className={styles.imagePara}>
              <h4 className={styles.imageParaHeading}>Automated Citing and Referencing</h4>
              <p className={styles.paragrapgh}>Bid farewell to the time-consuming task of manually formatting citing and referencing. CiteExTM empowers you with automated reference generation, ensuring accuracy and consistency across your work. Focus on your research and writing while CiteExTM handles the citation intricacies for you. From research papers to essays, our intelligent algorithms have got you covered, supporting various citation styles effortlessly.</p>
            </div>
          </div>
        </div>
        <div className={styles.innerFooter}>
          <div className={styles.innerMiniDiv}>
            <h4 className={styles.footerHeading}>Join the CiteEx community and elevate your</h4>
            <h4 className={styles.footerHeading}>Research & Writing experience to new heights!</h4>
            <div className={styles.innerFooterPara}>
              <p>Unlock the full potential of your research and writing with CiteExTM. Sign up and experience the future of efficient</p>
              <p>citing and referencing, collaborative excellence, and hassle-free academic work.</p>
            </div>
            <div className={styles.buttonFooter}>
              <Link href="/Contact" passHref>   <button className={styles.searchButtonFooter} >Contact Us</button>
              </Link>
            </div>
          </div>
          <div className={styles.mainFooter}>
            <div className={styles.innerMainFooter}>
              <div className={styles.copyright}>
                <PiCopyrightLight style={{ color: 'white', marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: 'white',
                  marginLeft: '3px'
                }}> 2023 CiteEx</p>
              </div>
              <div className={styles.footerLinks}>
                <div >
                  <Link style={{ textDecoration: "none", fontSize: "18px", color: 'white', }} href="/About" passHref>
                    <div style={{ marginRight: '30px' }}> About Us</div>

                  </Link>
                </div>
                <div >
                  <Link style={{ textDecoration: "none", fontSize: "18px", color: 'white' }} href="/Contact" passHref>
                    <div> Contact Us</div>
                  </Link>
                </div>
              </div>
              <div>
                <Link style={{ textDecoration: "none", }} href="https://www.instagram.com/eciteex/" passHref>

                  <FaInstagram style={{
                    fontSize: '17px',
                    backgroundcolor: 'white',
                    width: '30px',
                    padding: '5px 7px 5px',
                    color: 'white'
                  }} />
                </Link>
                <Link style={{ textDecoration: "none", }} href="https://x.com/eciteex" passHref>
                  <FaXTwitter style={{
                    fontSize: '17px',
                    backgroundcolor: 'white',
                    width: '30px',
                    padding: '5px 7px 5px',
                    color: 'white'
                  }} />
                </Link>
                <Link style={{ textDecoration: "none", }} href="https://www.youtube.com/@citeex" passHref>
                  <AiOutlineYoutube style={{
                    fontSize: '20px',
                    backgroundcolor: 'white',
                    width: '30px',
                    padding: '5px 7px 5px',
                    color: 'white'
                  }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}