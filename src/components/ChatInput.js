import React from 'react'
import styled from 'styled-components'

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Type your message..." />
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput;

const Container = styled.div`

`
const InputContainer = styled.div`

`