import React from 'react'
import { Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../store/actions/modalActions'

const mapState = (state) => ({
    body: state.modals.body,
    open: state.modals.open,
    size: state.modals.size
})

const actions = {
    closeModal
}

const ModalContainer = ({ body, open, size, closeModal }) => {
    return (
        <Modal open={open} onClose={closeModal} size={size}>
            <Modal.Content>{body}</Modal.Content>
        </Modal>
    )
}

ModalContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    body: PropTypes.any,
    closeModal: PropTypes.func.isRequired,
    size: PropTypes.string
}

ModalContainer.defaultProps = {
    body: null,
    size: 'mini'
}

export default connect(mapState, actions)(ModalContainer)
