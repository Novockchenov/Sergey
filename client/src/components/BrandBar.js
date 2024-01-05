import {observer} from "mobx-react-lite"
import { useContext } from "react"
import {Context} from "../index"
import { Card,  Row } from "react-bootstrap"

const BrandBar = observer( () => {
    const {device} = useContext(Context)
    return (
        <Row>
            {device.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )} 
        </Row>
    )
})

export default BrandBar