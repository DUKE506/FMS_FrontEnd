import SignIn from "./_components/signIn";
import styles from "./page.module.css"


const Login = () =>{

    return(
        <div className={styles.login}>
            <SignIn/>
        </div>
    )
}

export default Login;