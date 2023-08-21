import { useState } from "react"

const useForm = (initialState: object) => {
    const [state, setState] = useState(initialState)
  return [state, (evt: any) => setState(prevState => ({
    ...prevState,
    [evt.target.name]: evt.target.value
  }))]
}

export default useForm
