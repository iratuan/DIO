import styled from 'styled-components/native';

import {FlatList} from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const ProductContainer = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 40px;
    border-radius: 5pc;
`;

export const ProductList = styled(FlatList).attrs({
    numColumns: 1,
})`
    flex: 1;
    padding: 40px 20px;
`;

export const Product = styled.View`
    flex: 1;
    margin: 8px;
    background: #626878;
    padding: 32px 12px;
    border-radius: 25px;
`;

export const ProductImage = styled.Image`
    width: 90%;
    height: 220px;
    align-self: center;
`;

export const ProductTitle = styled.Text`
    color: #b9c0d2;
    font-size: 22px;
    margin-top: 10px;
    font-height: 40px;
    letter-spacing: 3.5px;
    text-align: center;
`;
