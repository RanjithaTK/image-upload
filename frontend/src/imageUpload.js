import React, { useState } from "react"
import CustomInput from "./Input.component/Input.jsx"
import axios from "axios"
const imageUpload = () => {
  const [fileData, setFileData] = useState()
  const [images, setFile] = useState("")

  const handleFileChange = ({ target }) => {
    setFileData(target.files[0])
    setFile(target.value)
    // console.log(target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("image", fileData)

    await axios
      .post("http://localhost:5000/api/image", formdata)
      .then((res) => {
        console.log("res", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  return (
    <form>
      <CustomInput
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
        placeholder="upload image"
      />
    </form>
  )
}

export default imageUpload
