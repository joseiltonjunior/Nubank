import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';


import {
  Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation
} from './styles';

export default function Main() {
  const translateY = new Animated.Value(0);

  function onHandlerStateChange(event) {

  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <PanGestureHandler
          onGestureEvent={}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 145.050,40</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 350,00 recebida de Junior Ferreira hoje às 18:00;
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>

      <Tabs />
    </Container>
  );
}