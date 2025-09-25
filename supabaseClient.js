// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://oroftapkdkuikesgbvdd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yb2Z0YXBrZGt1aWtlc2didmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjExNjgsImV4cCI6MjA2NDEzNzE2OH0.YQVMn0wa0fbDlKBz-5mU67n3BUixzIh24-zZqzWA9mI'
)