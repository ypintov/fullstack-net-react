import { MODAL_OPEN } from './actionTypes';
import { MODAL_CLOSE } from './actionTypes';

export const openModal = (body, size) => {
    return {
        type: MODAL_OPEN,
        payload: {
            body, 
            size
        }
    }
}

export const closeModal = () => {
    return {
        type: MODAL_CLOSE
    }
}