import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * React Router keeps the window scroll position across route changes, so
 * navigating from a scrolled page (e.g. Home → Menu) lands the visitor
 * mid-page. Reset to the top on every new navigation.
 */
export const ScrollToTop = () => {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Back/forward: let the browser restore where the visitor was.
    if (navigationType === 'POP') return;
    // Anchor links (e.g. /menu#pho) scroll themselves.
    if (hash) return;

    window.scrollTo(0, 0);
    // `key` changes on every navigation, including pushes to the current URL.
  }, [key]);

  return null;
};
