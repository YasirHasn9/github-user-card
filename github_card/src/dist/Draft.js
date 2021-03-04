import {EditorState, Editor} from "draft-js"
import { useState } from "react"

export const Edit =() => {
    const [editState, setEditState] = useState(EditorState.createEmpty())

    const handleChange = state => {
        setEditState(state)
    }
    return (
        <div>
            Editor
            <Editor
            placeholder="hello"
            editorState={editState}
            onChange={handleChange}
             />
        </div>
    )
}