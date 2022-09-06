import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './DropFileInput.css'
import { ImageConfig } from '../../config/ImageConfig'
import { BiTrash } from 'react-icons/bi'

export default function DropFileInput({
  formDataNotify,
  setFormDataNotify,
  listImages,
  setListImages
}) {
  const [reRender, setReRender] = useState(false)
  const wrapperRef = useRef(null)
  const [files, setFiles] = useState([])
  const onDragEnter = () => wrapperRef.current.classList.add('dragover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    for (let i = 0; i < e.target.files.length; i++) {
      if (validateFileSize(e.target.files[i])) {
        setFiles(prevFiles => [...prevFiles, e.target.files[i]])
      }
    }
  }

  const validateFileSize = element => {
    if (files.length > 4) {
      setFormDataNotify({
        ...formDataNotify,
        visible: true,
        message: `Limite de 5 imagens atingido.`
      })
      return false
    }
    if (element.size / 10000 < 1500) {
      return true
    }
    setFormDataNotify({
      ...formDataNotify,
      visible: true,
      message: `O arquivo ${element.name} excede o limite de 15MB`
    })
    return false
  }

  const fileRemove = file => {
    const updatedList = [...files]
    updatedList.splice(files.indexOf(file), 1)
    setFiles(updatedList)
  }

  const bytesToSize = bytes => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return '0 Byte'
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1000, i), 2) + sizes[i]
  }

  const convertFileName = fileName => {
    return fileName.replace(/\.[^\/.]+$/, '')
  }

  useEffect(() => {
    if (reRender) {
      setReRender(!reRender)
    }
  }, [reRender])

  useEffect(() => {
    if (files.length == 5) {
      setListImages(files)
    }
  }, [files])

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
            className="ipt-browser-file"
            type="file"
            value=""
            onChange={onFileDrop}
            multiple
          />
          <p>{`Arquivos aceitos: png, jpg e jpeg.
          Limite de 5 fotos e tamanho máximo - 15MB`}</p>
        </div>
        <input
          className="iptOnFileDrop"
          type="file"
          value=""
          onChange={onFileDrop}
          multiple
        />
      </div>
      {files.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Arquivos</p>
          {files.map((item, index) => (
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
