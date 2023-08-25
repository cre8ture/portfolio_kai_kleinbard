// components/GoogleAnalytics.js
import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }) => {
  return (
    <>
      <Script
       id="google-analytics1"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script 
      id="google-analytics2"
       strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;