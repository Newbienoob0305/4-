import React, { useEffect } from 'react';

interface AdBannerProps {
  client?: string; // 예: 'ca-pub-1234567890123456'
  slot?: string;   // 예: '1234567890'
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  client,
  slot,
  format = 'auto',
  className = '',
  label = '광고 영역 (Ad Space)',
}) => {
  useEffect(() => {
    // If real AdSense client and slot exist, trigger adsbygoogle push
    if (client && slot) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense script push error:', e);
      }
    }
  }, [client, slot]);

  // If real AdSense credentials exist, render ins tag
  if (client && slot) {
    return (
      <div className={`w-full text-center overflow-hidden my-4 ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder banner before AdSense approval/credentials are provided
  return (
    <div className={`w-full my-6 ${className}`}>
      <div className="w-full py-4 px-4 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700/60 flex flex-col items-center justify-center text-center space-y-1 select-none backdrop-blur-sm">
        <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
          ADVERTISEMENT
        </span>
        <p className="text-xs text-slate-400 font-medium">
          {label}
        </p>
        <span className="text-[10px] text-slate-600">
          (구글 애드센스 / 카카오 애드핏 승인 후 광고가 보여지는 위치입니다)
        </span>
      </div>
    </div>
  );
};
