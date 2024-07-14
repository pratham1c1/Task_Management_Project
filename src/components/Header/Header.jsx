import siteLogo from '@assets/logo-no-background.svg'
import styles from '@components/Header/Header.module.css'

function Header(){
  
    return(
        <>
        <header>
          <nav className="navbar navbar-inverse">
            <div className={styles.containerFluid}>
              <div>
              <img className={styles.siteLogo} src={siteLogo} />
              </div>
              <ul className={"nav" ,"navbar-nav" ,styles.firstNavList}>
                <button className={styles.firstNavListButtons}>Home</button>
                <button className={styles.firstNavListButtons}>Features</button>
              </ul>
              <ul><div className={styles.lineDivider}></div></ul>
              <ul className={"nav" ,"navbar-nav" , styles.secondNavList}>
                <button className={styles.firstNavListButtons , styles.loginButton}>Login</button>
                <button className={styles.firstNavListButtons  , styles.signupButton}>Start for Free</button>
                
              </ul>
            </div>
          </nav>
        </header>
        </>
    )
}

export default Header