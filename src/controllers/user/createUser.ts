import { Request, Response } from 'express'
import { supabase } from '../../db/supabaseClient'
import { User } from '../../models/users'
import bcrypt from 'bcrypt'

export const createUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword
    user.created_at = new Date().toISOString()
    user.is_verified = false

    // Option 1: infer type
    const { data, error } = await supabase.from('users').insert([user])
    
    // Option 2: explicit typing
    // const { data, error } = await supabase.from<User, User>('users').insert([user])

    if (error) return res.status(400).json({ error: error.message })
    res.status(201).json(data)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}
