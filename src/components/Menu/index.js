import React from 'react';

import QRCode from 'react-native-qrcode-svg';

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, Code, Nav, NavItem, NavText, SingOutButtom, SingOutButtomText } from './styles';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
            }),
        }}>
            <Code>
                <QRCode
                    value="https://www.linkedin.com/in/junior-ferreira-318989189/"
                    size={80}
                    color="#FFF"
                    backgroundColor="#8B10AE"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Pefil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configuração do app</NavText>
                </NavItem>
            </Nav>

            <SingOutButtom onPress={() => { }}>
                <SingOutButtomText>SAIR DO APP</SingOutButtomText>
            </SingOutButtom>
        </Container>
    );
}