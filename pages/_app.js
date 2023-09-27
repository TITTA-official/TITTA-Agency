import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
 

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1540797856672473') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return (
    <div className="overflow-hidden">
      <GoogleAnalytics trackPageViews />
      <Analytics />
            <>
                  <script>
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '303640862424815');
                  fbq('track', 'PageView');
                  </script>
                  <noscript><img height="1" width="1" style="display:none"
                  src="https://www.facebook.com/tr?id=303640862424815&ev=PageView&noscript=1"
                  /></noscript>
             </>
      <DefaultSeo
        title="TITTA Agency"
        description="We are committed to offering professional services with current technologies backed by years of experience."
        canonical="https://www.tittaagency.com/"
        openGraph={{
          type: "website",
          site_name: "TITTA Agency",
          images: [
            {
              url: "https://titta-agency-d4is19kzj-titta-official.vercel.app/banner-img1.jpg",
              alt: "Agency",
              type: "image/jpeg",
            },
          ],
          description:
            "We are committed to offering professional services with current technologies backed by years of experience.",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "TITTA, Titta, Titta Agency, Agency, website agency, agency",
          },
        ]}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
