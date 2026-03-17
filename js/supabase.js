// =====================
// SUPABASE CONFIGURATION
// =====================
const SUPABASE_URL = 'https://wbzmaljmzeuxyyczervi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_0Y2A1E0EzR21iKoDIHQU6A_0LlWFalV';

// Load Supabase from CDN
const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

// =====================
// AUTH HELPERS
// =====================

async function getCurrentUser() {
  const { data: { user } } = await sb.auth.getUser();
  return user;
}

async function getUserProfile(userId) {
  const { data, error } = await sb
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  return data;
}

async function logout() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
}

// =====================
// USAGE LIMIT HELPERS
// =====================

const FREE_LIMIT = 2;

async function canAnalyze() {
  const user = await getCurrentUser();
  if (!user) {
    // Non-logged: check localStorage
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    return count < 1;
  }

  const profile = await getUserProfile(user.id);
  if (!profile) return true;
  if (profile.plan === 'premium') return true;

  // Reset monthly count if needed
  const resetDate = new Date(profile.analyses_reset_date);
  const now = new Date();
  if (now.getMonth() !== resetDate.getMonth() || now.getFullYear() !== resetDate.getFullYear()) {
    await sb.from('profiles').update({
      analyses_count: 0,
      analyses_reset_date: now.toISOString().split('T')[0]
    }).eq('id', user.id);
    return true;
  }

  return profile.analyses_count < FREE_LIMIT;
}

async function incrementUsage(userId) {
  if (!userId) {
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    localStorage.setItem('ideadrop_anon_usage', count + 1);
    return;
  }
  const profile = await getUserProfile(userId);
  if (profile && profile.plan !== 'premium') {
    await sb.from('profiles').update({
      analyses_count: (profile.analyses_count || 0) + 1
    }).eq('id', userId);
  }
}

async function getRemainingAnalyses() {
  const user = await getCurrentUser();
  if (!user) {
    const count = parseInt(localStorage.getItem('ideadrop_anon_usage') || '0');
    return Math.max(0, 1 - count);
  }
  const profile = await getUserProfile(user.id);
  if (!profile || profile.plan === 'premium') return '∞';
  return Math.max(0, FREE_LIMIT - (profile.analyses_count || 0));
}
