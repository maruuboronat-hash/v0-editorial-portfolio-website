import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Por ahora usamos español por defecto
  const locale = 'es';

  return {
    locale,
    messages: (await import(`../../messages/${locale}/common.json`)).default
  };
});
