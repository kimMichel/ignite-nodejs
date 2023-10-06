import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInService } from '../validate-check-in'

export function makeValidateCheckInsService() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const service = new ValidateCheckInService(checkInsRepository)
  return service
}
