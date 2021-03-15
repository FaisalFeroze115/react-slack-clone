import React from 'react'
import styled from 'styled-components'
import { auth, provider} from '../firebase'
import slack from '../img/slack.png';

function Login(props) {

    const singIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            // console.log(result.user);
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser);

        })
        .catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <Container>
            <Content>
                <SlackImg src={slack}/>
                <h1>Sign in Slack</h1>
                <SignInButton onClick={()=>singIn()}>
                    Sign in with google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh; 
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    background-color: white;
    padding: 100px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12% ), 0 1px 2px rgb(0 0 0 / 24%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const SlackImg = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 40px;
    background-color: #0a8d48;
    color: white;
    border: none;
    padding: 10px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
`

