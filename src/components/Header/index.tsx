import {SignInButton} from '../SignInButton'
import styles from './styles.module.scss'
export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
               <span aria-label="Notícias sobre acessibilidade" title="Notícias sobre acessibilidade" className={styles.brand}>A11y.<span>news</span></span>
                <nav>
                   <ul> 
                       <li className={styles.linkActive}> <a href="home">Home</a>  </li>
                   <li> <a href="Posts">Posts</a></li>
                   <li> <a href="Posts">Posts</a></li>
                   <li> <a href="Posts">Posts</a></li>
                   </ul>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}