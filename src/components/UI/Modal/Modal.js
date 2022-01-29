import classes from './Modal.module.css'
import ReactDom from 'react-dom'
import React from 'react'
import Card from '../Card/Card'

const Backdrop = (props) => {

  return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
  return (
    <Card className={`${ classes.modal } ${ props.className }`}>
      {props.children}
    </Card>
  )
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay>
          {props.children}
        </ModalOverlay>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  )
}

export default Modal
