function RestrictedPage({isLoggedIn, user, Login, Logout}){

    return(
        <div>
            {isLoggedIn ? (
                <h1 className="not">Voce nao tem acesso a esta pagina!</h1>
            ): (<h1 className="log">Bem-vindo, {user}!</h1>)}

        {isLoggedIn ? (
            <button className="notBtn" onClick={Login}> Clique para entrar! </button>):
            (<button className="logBtn" onClick={Logout}>Clique para sair!</button>)
        }
        </div>


    )
}

export default RestrictedPage