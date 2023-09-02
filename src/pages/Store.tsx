import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Row, Col } from 'react-bootstrap';
import { Products } from '../components/Products';

type ProductItem = {
    id: number,
    description: string,
    image: string,
    price: number,
    title: string,
}

const API_URL = 'https://fakestoreapi.com/products'

export function Store () {
    const [products, setProducts] = useState<ProductItem[]>([]);

    const fetchProducts = async () => {
        
        // const result = await Axios.get(API_URL);
        // const data = result.data;
        const response = await fetch(API_URL);
        const data = await response.json();

        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log(products)
    return (
        <>
            <h1>STORE</h1>
            {
                products.length > 0 && 
                <Row className='g-3' xs={1} md={2} lg={3}>
                    { 
                        products.map(m => 
                            <Col key={m.id}>
                                <Products {...m} />
                            </Col>
                        )
                    }
                </Row>
            }
        </>
    )
}