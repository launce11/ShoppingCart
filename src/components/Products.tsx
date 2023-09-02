import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type ProductProps = {
    id: number,
    description: string,
    image: string,
    price: number,
    title: string,
}

export function Products ({ id, description, image, price, title }: ProductProps) {
    let quantity = 1;
    return (
        <Card className="m-100" style={{ height: "400px" }}>
            <Card.Img variant="top" src={image} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-6">{title}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? 
                        <Button className="w-100">+ Add To Card</Button> :
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button>+</Button>
                                <div><span className="fs-3">{quantity} in cart</span></div>
                                <Button>-</Button>
                            </div>
                            <Button variant="danger" size="sm">Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}