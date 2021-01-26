import { PetProps } from "../../../api/PetsApi"
import {Card} from 'primereact/card'

type PetViewProps = {
    pet: PetProps
}


const PetView = ({pet}: PetViewProps) => {
    return (
        <Card title={pet.name}>
            {pet.sex}
        </Card>
    )
}

export default PetView