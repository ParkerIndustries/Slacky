import React from 'react'
import styled from 'styled-components'
import Send from '@material-ui/icons/Send'
function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Type your message..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;
    
    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #606060;
    color: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #007a5a;
    }
`