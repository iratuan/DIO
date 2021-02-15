import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {Container, EmptyCartText} from './styles';

export default function EmpityCart() {
    return (
        <Container>
            <EmptyCartText>
                <FeatherIcon name="slash" size={38} color="#f3f9ff" />
                Seu carrinho está vazio.
            </EmptyCartText>
        </Container>
    );
}
