import React, { useRef } from 'react'


const Test = () => {
 const registerUsernameRef = useRef(null);
 const registerPaswordRef = useRef(null);
 const loginUsernameRef = useRef(null);
 const loginPasswordRef = useRef(null);



const login = () => {
    //logics
    const username = loginUsernameRef.current.value
    const Password = loginPasswordRef.current.value
    console.log(username, Password)
}

const regiter = () => {
    //logics
    const username = registerUsernameRef.current.value
    const Password = registerPaswordRef.current.value
    console.log(username, Password)
}

  return ( <React.Fragment>
    <div>
      <div className='Register-form'>
         <h1>Regiter</h1>
         Username:<input ref={registerUsernameRef}/>
         Password:<input ref={registerPaswordRef}/>
         <button onClick={regiter}>Regiter</button>
      </div>
      <div className='Login-form'>
         <h1>Login</h1>
         Username:<input ref={loginUsernameRef}/>
         Password:<input ref={loginPasswordRef}/>
         <button onClick={login}>Login</button>
      </div>
    </div>
   
  </React.Fragment>
    
     )
}

export default Test