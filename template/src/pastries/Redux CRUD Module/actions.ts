import {
  FETCH_UPPER_PLACEHOLDER,
  DELETE_UPPER_PLACEHOLDER,
  UPDATE_UPPER_PLACEHOLDER,
  FETCH_SINGLE_UPPER_PLACEHOLDER,
  CREATE_UPPER_PLACEHOLDER
} from './types'
import { PASCAL_PLACEHOLDER } from './reducer'

export const fetchUPPER_PLACEHOLDERes = () => ({
  type: FETCH_UPPER_PLACEHOLDER,
  request: {
    url: '/PLACEHOLDER',
    method: 'GET'
  }
})

export const fetchSingleUPPER_PLACEHOLDER = (
  PLACEHOLDERId: PASCAL_PLACEHOLDER['id']
) => ({
  type: FETCH_SINGLE_UPPER_PLACEHOLDER,
  request: {
    url: `/PLACEHOLDER/${PLACEHOLDERId}`,
    method: 'GET'
  }
})

export const updateUPPER_PLACEHOLDER = ({
  id,
  ...PLACEHOLDER
}: Partial<PASCAL_PLACEHOLDER> & { id: string }) => ({
  type: UPDATE_UPPER_PLACEHOLDER,
  request: {
    url: `/PLACEHOLDER/${id}`,
    method: 'PATCH',
    data: PLACEHOLDER
  },
  meta: {
    id
  }
})

export const deleteUPPER_PLACEHOLDER = (
  PLACEHOLDER: PASCAL_PLACEHOLDER
) => ({
  type: DELETE_UPPER_PLACEHOLDER,
  request: {
    url: `/PLACEHOLDER/${PLACEHOLDER.id}`,
    method: 'DELETE'
  },
  meta: PLACEHOLDER
})

// Dev
export const createUPPER_PLACEHOLDER = (PLACEHOLDER: PASCAL_PLACEHOLDER) => ({
  type: CREATE_UPPER_PLACEHOLDER,
  request: {
    url: '/PLACEHOLDER',
    method: 'POST',
    data: PLACEHOLDER
  }
})
