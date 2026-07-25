'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();

  const switchLanguage = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
      <button
        onClick={() => switchLanguage('es')}
        className={`${locale === 'es' ? 'text-brand' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
      >
        ES
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLanguage('en')}
        className={`${locale === 'en' ? 'text-brand' : 'text-muted-foreground hover:text-foreground'} transition-colors`}
      >
        EN
      </button>
    </div>
  );
}
