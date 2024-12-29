import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://vhihiwdhsvzmyacscivu.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoaWhpd2Roc3Z6bXlhY3NjaXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyODUxNjksImV4cCI6MjA1MDg2MTE2OX0.vEBn05R-p5uVW-hzDWxCyswSz4N_eyab-1GH2UKjcmA'
)

export default supabase