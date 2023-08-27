import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <GoogleAnalytics trackPageViews />
      <Analytics />
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
