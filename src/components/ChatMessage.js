import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/men/1.jpg" />
            </UserAvatar>

            <MessageContent>
                <Name>
                    Faisal Feroze
                    <span>2/23/2021 11:23 AM</span>
                </Name>

                <Text>
                    Yo Whats upp man ??!!!!
                </Text>
            </MessageContent>


        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 20px;
    display: flex;
    align-items: center;

`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const UserAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-raius: 8px;
    overflow: hidden;
    margin-right: 8px;

    img{
        width: 100%;
    }
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;
    
    span{
        margin-left: 8px;
        font-weight: 400;
        color: rgba(97,96,97);
        font-size: 13px;
    }
`

const Text = styled.span``