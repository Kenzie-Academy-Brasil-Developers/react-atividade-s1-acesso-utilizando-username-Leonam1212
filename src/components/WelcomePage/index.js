const WelcomePage = ({user, setIsLoggedIn}) => {

    const HandleLogout = () => {
        
        setIsLoggedIn (!true)
    }

    return (
        <div>
            <p>Boas vindas, {user}</p>
            <button onClick = {HandleLogout}>Sair</button>
        </div>




    )
    
}

export default WelcomePage 


