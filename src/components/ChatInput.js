import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..."/>
                    <SendButton>
                        <Send/>
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;

`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input{
            flex: 1;
            border: none;
            font-size: 16px;
        }

        input:focus{
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 5px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    cursor: pointer;

    :hover{
        background: #148567;
    }
`

const Send = styled(SendIcon)`
    width: 18px;
    color: #D9D9D9;
`

