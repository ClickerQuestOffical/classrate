// Supabase client initialization for ClassReview
// This file creates and exports a Supabase client instance

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/+esm';

// Import configuration
const { SUPABASE_URL, SUPABASE_ANON_KEY } = config;

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export the supabase instance for use in other modules
export { supabase };

// Optional: Set anonymous user ID for RLS policies
// In a real implementation, this would be set per session
export function setAnonymousUserId(userId) {
    // This would be used to set the app.anonymous_user_id setting for RLS
    // For now, we'll rely on RLS policies that don't require this
    console.log("Anonymous user ID would be set:", userId);
}

// Handle Supabase connection status
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        console.log('User signed in:', session.user?.id);
    } else if (event === 'SIGNED_OUT') {
        console.log('User signed out');
    }
});

console.log("Supabase client initialized");