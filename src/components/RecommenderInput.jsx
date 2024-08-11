import { Button, Input } from '@chakra-ui/react'
import { Type } from '../constants/Types';

const RecommenderInput = ({ onSubmit }) => {
    const handleColumnClick = () => {
        onSubmit(Type.COLUMN);
    }

    const handleModelClick = () => {
        onSubmit(Type.MODEL);
    }

    return (
        <div>
            <Button onClick={handleColumnClick}>
                Column
            </Button>
            <Button onClick={handleModelClick}>
                Model
            </Button>

        </div>
    )
}

export default RecommenderInput;