import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef])
  
  return (  
    <Container>
    
    <Messages ref={messageRef}>
      {Array.from(Array(20).keys()).map((n) => (
        <ChannelMessage 
          key={n}
          author='Miguel Lima'
          date="10/07/2020"
          content="Hoje é sexta-feira!!!"
        />
      ))}

      <ChannelMessage 
        author='Magda Lima'
        date="10/07/2020"
        content={
          <>
          <Mention>@Miguel Lima</Mention>, me carrega no seu coração!
          </>
        }
      
      />
    </Messages>

    <InputWrapper>
        <Input type="text" placeholder="Coversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>

    </Container>
  );
};

export default ChannelData;