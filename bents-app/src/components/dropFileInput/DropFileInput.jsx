import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './DropFileInput.css'
import { ImageConfig } from '../../config/ImageConfig'
import { BiTrash } from 'react-icons/bi'

const DropFileInput = props => {
  const wrapperRef = useRef(null)
  const [fileList, setFileList] = useState([])
  const onDragEnter = () => wrapperRef.current.classList.add('dragover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      if (validateFileSize(updatedList)) {
        setFileList(updatedList)
        props.onFileChange(updatedList)
      }
      console.log('aaaa')
    }
  }

  const validateFileSize = list => {
    let validateFileSize = false
    list.forEach(element => {
      console.log(element.size / 10000)
      element.size / 10000 < 1500
        ? (validateFileSize = true)
        : (validateFileSize = false)
    })
    console.log(validateFileSize)
    return validateFileSize
  }

  const fileRemove = file => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  const bytesToSize = bytes => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return '0 Byte'
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1000, i), 2) + ' ' + sizes[i]
  }

  const convertFileName = fileName => {
    return fileName.replace(/\.[^\/.]+$/, '')
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <p>Arraste & Solte ou</p>
          <input
            multiple
            className="ipt-browser-file"
            type="file"
            value=""
            onChange={onFileDrop}
          />
          <p>{`Arquivos aceitos: png, jpg e jpeg.
          Tamanho máximo - 15MB`}</p>
        </div>
        <input
          className="iptOnFileDrop"
          type="file"
          value=""
          onChange={onFileDrop}
        ></input>
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Arquivos</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <div className="drop-file-preview__item__info">
                <img
                  src={
                    ImageConfig[item.type.split('/')[1]] ||
                    ImageConfig['default']
                  }
                />
                <div>
                  <p className="drop-file-preview__item__info--title">
                    {convertFileName(item.name)}
                  </p>
                  <p className="drop-file-preview__item__info--size">
                    {bytesToSize(item.size)}
                  </p>
                </div>
              </div>
              <BiTrash
                className="drop-file-preview__item__del"
                onClick={() => fileRemove(item)}
              />
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func
}

export default DropFileInput
