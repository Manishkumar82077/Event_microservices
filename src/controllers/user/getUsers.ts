import { Request, Response } from 'express';
import { supabase } from '../../db/supabaseClient';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      console.error('Error fetching users:', error);
      return res.status(500).json({ error: error.message });
    }

    console.log('Fetched users:', data);
    res.json(data);
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};