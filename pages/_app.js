import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { supabase } from '../supabase';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.getSession());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Kalo mau pakai auth, pakai ini
  // <Component {...pageProps} session={session} />

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
