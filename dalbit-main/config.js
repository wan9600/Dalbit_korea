// config.js
// CDN을 통해 Supabase 라이브러리를 직접 불러옵니다.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://qekjapmxemwsnuuvpzqs.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__Ocmk3rKQ2YIpKHT8jHSuQ_39vCTof8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);