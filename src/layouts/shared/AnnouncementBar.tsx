import { useId, useLayoutEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { business } from '../../data/business';
import './AnnouncementBar.css';

export const AnnouncementBar = () => {
  const [isPaused, setIsPaused] = useState(false);
  const barRef = useRef<HTMLElement>(null);
  const trackId = useId();
  const { enabled, message } = business.announcement;
  const isVisible = enabled && message.trim().length > 0;

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!isVisible || !bar) return;

    const root = document.documentElement;
    const previousHeight = root.style.getPropertyValue('--announcement-height');
    const previousPriority = root.style.getPropertyPriority('--announcement-height');
    const measure = () => {
      root.style.setProperty('--announcement-height', `${bar.getBoundingClientRect().height}px`);
    };
    const observer = new ResizeObserver(measure);
    measure();
    observer.observe(bar);

    return () => {
      observer.disconnect();
      if (previousHeight) root.style.setProperty('--announcement-height', previousHeight, previousPriority);
      else root.style.removeProperty('--announcement-height');
    };
  }, [isVisible, message]);

  if (!isVisible) return null;

  return (
    <aside ref={barRef} className={`announcement-bar${isPaused ? ' is-paused' : ''}`} aria-label="Restaurant updates">
      <span className="announcement-label" aria-hidden="true">Updates</span>
      <p className="sr-only">{message}</p>
      <div className="announcement-window" aria-hidden="true">
        <div id={trackId} className={`announcement-track${isPaused ? ' is-paused' : ''}`}>
          <span className="announcement-message">{message}</span>
          <span className="announcement-message">{message}</span>
        </div>
      </div>
      <button
        type="button"
        className="announcement-control"
        aria-label={isPaused ? 'Resume announcement scrolling' : 'Pause announcement scrolling'}
        aria-controls={trackId}
        onClick={() => setIsPaused((paused) => !paused)}
      >
        {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      </button>
    </aside>
  );
};
