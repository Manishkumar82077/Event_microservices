export interface User {
  userId?: number
  email: string
  password: string
  fullName: string
  username: string
  role: 'admin' | 'owner' | 'organizer' | 'customer'
  phone?: string
  recoveryQuestion?: string
  recoveryQuestionAns?: string
  created_at?: string
  is_verified?: boolean
}
