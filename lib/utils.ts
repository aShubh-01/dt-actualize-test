import { ObjectId } from 'mongodb'

export function toObjectId(id: string): ObjectId { // converts string id into ObjectId
  if (!id) {
    throw new Error('ObjectId string cannot be empty')
  }

  if (!ObjectId.isValid(id)) {
    throw new Error(`Invalid ObjectId format: ${id}`)
  }

  return new ObjectId(id)
}