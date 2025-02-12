import { createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

const supabase = createClient<Database>('https://fualzxtdgddsishhaxzv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YWx6eHRkZ2Rkc2lzaGhheHp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMjUyNTcsImV4cCI6MjA1MDYwMTI1N30.PN-HV3MMYPIHxfN7GXOg7OjX_FpZK0LA0VZp_cdUEjw')

export {
    supabase
}