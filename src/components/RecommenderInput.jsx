import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'

const RecommenderInput = ({ onSearch }) => {
    const [text, setText] = useState('')

    return (
        <div>
            <Input
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={onSearch}>
                Search
            </Button>
        </div>
    )
}

export default RecommenderInput;