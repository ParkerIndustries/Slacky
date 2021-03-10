import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/82.jpg" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    User
                    <span>10/03/2021 23:14</span>
                </Name>
                <Text>
                    Message
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

const UserAvatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Name = styled.span`
    font-weight: 900;
    font-size: 15px;
    line-height: 1.4;

    span {
        margin-left: 6px;
        font-weight: 400;
        color: rgba(90, 90, 90);
        font-size: 13px;
    }
`

const Text = styled.span``
