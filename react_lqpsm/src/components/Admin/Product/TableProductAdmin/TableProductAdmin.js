import React from "react"
import { Table, Image, Button, Icon, TableHeader, TableRow, TableBody } from "semantic-ui-react"
import { map } from "lodash"
import "./TableProductAdmin.scss"

export function TableProductAdmin(props){
    const { products, updateProduct, deleteProduct } = props

    return (
        <Table className="table-product-admin">
            <TableHeader>
                <TableRow>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell>Activo</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {map(products, (product, index) => (
                    <Table.Row key={index}>
                        <Table.Cell width={2}>
                            <Image src={product.image} />
                        </Table.Cell>
                        <Table.Cell>{product.title}</Table.Cell>
                        <Table.Cell>${product.price}</Table.Cell>
                        <Table.Cell>{product.category_data.title}</Table.Cell>
                        <Table.Cell className="status">
                            {product.active ? <Icon name="check" /> : <Icon name="close" />}
                        </Table.Cell>

                        <Actions 
                            product={product} 
                            updateProduct={updateProduct} 
                            deleteProduct={deleteProduct}
                        />
                    </Table.Row>
                ))}
            </TableBody>
        </Table>
    )
}

function Actions(props) {
    const { product, updateProduct, deleteProduct } = props

    return (
        <Table.Cell textAlign="right">
            <Button icon onClick={() => updateProduct(product)}>
                <Icon name="pencil" />
            </Button>
            <Button icon negative onClick={() => deleteProduct(product)}>
                <Icon name="close" />
            </Button>
        </Table.Cell>
    )
}