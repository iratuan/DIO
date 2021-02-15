import React from 'react';
import {FeatherIcon} from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {
    CartButtonText,
    CartButton,
    CartPricing,
    CartTotalPrice,
    Container,
} from './styles';

export default function FloatingCart() {
    const navigation = useNavigation();
    return (
        <Container>
            {/* <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" /> */}
            <CartButton onPress={() => navigation.navigate('Cart')}>
                <CartButtonText>2 Itens</CartButtonText>
                <CartPricing>
                    <CartTotalPrice>R$ 200,00</CartTotalPrice>
                </CartPricing>
            </CartButton>
            {/* <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" /> */}
        </Container>
    );
}
