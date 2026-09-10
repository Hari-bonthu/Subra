import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description?: string;
}

/**
 * Dynamically sets the document title and meta description tag per route.
 * Restores previous values when the component unmounts.
 */
export function usePageMeta({ title, description }: PageMetaOptions): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let metaTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    let created = false;
    const previousDescription = metaTag ? metaTag.content : '';

    if (description) {
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = 'description';
        document.head.appendChild(metaTag);
        created = true;
      }
      metaTag.content = description;
    }

    return () => {
      document.title = previousTitle;
      if (metaTag) {
        if (created && metaTag.parentNode) {
          metaTag.parentNode.removeChild(metaTag);
        } else if (previousDescription) {
          metaTag.content = previousDescription;
        }
      }
    };
  }, [title, description]);
}
