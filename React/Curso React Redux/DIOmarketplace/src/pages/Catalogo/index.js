import React, {useState} from 'react';
import {View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formataBRL from '../../utils/formatValue';

import {
    Container,
    PriceContainer,
    Product,
    ProductButton,
    ProductButtonText,
    ProductContainer,
    ProductImage,
    ProductList,
    ProductPrice,
    ProductTitle,
} from './styles';

export default function Catalog() {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'Assinatura mensal',
            price: 15.5,
            image_url:
                'https://cdn.statically.io/img/nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png?quality=100&f=auto',
        },
        {
            id: 2,
            title: 'Assinatura bimestral',
            price: 30.5,
            image_url:
                'https://cdn.statically.io/img/nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png?quality=100&f=auto',
        },
        {
            id: 3,
            title: 'Assinatura trimestral',
            price: 40.5,
            image_url:
                'https://cdn.statically.io/img/nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png?quality=100&f=auto',
        },
        {
            id: 4,
            title: 'Assinatura semestral',
            price: 50.5,
            image_url:
                'https://cdn.statically.io/img/nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png?quality=100&f=auto',
        },
    ]);
    return (
        <Container>
            <ProductContainer>
                <ProductList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    ListFooterComponent={<View />}
                    ListFooterComponentStyle={{
                        height: 80,
                    }}
                    renderItem={({item}) => (
                        <Product>
                            <ProductImage source={{uri: item.image_url}} />
                            <ProductTitle>{item.title}</ProductTitle>
                            <PriceContainer>
                                <ProductPrice>
                                    {formataBRL(item.price)}
                                </ProductPrice>
                                <ProductButton onPress={() => {}}>
                                    <ProductButtonText>
                                        Adicionar
                                    </ProductButtonText>
                                    <FeatherIcon
                                        size={25}
                                        name="plus-circle"
                                        color="#d1d7d9"
                                    />
                                </ProductButton>
                            </PriceContainer>
                        </Product>
                    )}
                />
            </ProductContainer>
        </Container>
    );
}
