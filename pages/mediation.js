import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

export default function MediationPage() {
  // eslint-disable-next-line import/no-unresolved
  const webpSrc = require('../images/mediation.jpg?webp');
  const imgSrc = require('../images/mediation.jpg');
  return (
    <Layout pageTitle="Areas of Mediation">
      <NextSeo
        title="Areas of Mediation"
        description="Mike Wallis is trained as a mediator can provide workplace, neighbourhood and family mediation. Find out how I can help you."
        canonical={`${process.env.CANONICAL_URL}/mediation`}
        openGraph={{
          url: `${process.env.CANONICAL_URL}/mediation`,
          title: 'Areas of Mediation | Wallis Consultancy',
        }}
      />
      <div className="flex flex-col md:flex-row">
        <div className="w-100 md:w-2/3 sm:pr-4 md:pr-8">
          <p>
            The service is available for workplace mediation,
            neighbourhood mediation and family mediation.
          </p>
          <p>
            Mediation is a voluntary process conducted confidentially
            in which I as a trained neutral person, known as a mediator,
            assists parties in working towards a negotiated agreement
            of a dispute or difference.
          </p>
          <p>
            The service is accessible for mediation in Hemel Hempstead,
            mediation in Berkhamsted and for mediation in Tring.
            The service is therefore able to be used for these areas of
            mediation in the whole of the Borough of Dacorum, Hertfordshire.
          </p>
          <p>
            Workplace Mediation can help settle conflict
            between staff and between staff and management
            or within management.
          </p>
          <p>
            Neighbourhood Mediation is helpful when neighbours or
            groups within a community are not able agree on an issue.
            Its use can stop matters getting out of control.
          </p>
          <p>
            Family mediation can help you and your ex to work out an
            agreement about issues such as arrangements for children
            after you break up, child maintenance payments or a financial settlement.
          </p>
          <p>
            Mediation can also be useful to help with other issues you
            might face, such as your children keeping in touch with
            their randparents, step families, or in-laws. It can also
            be useful for disputes within families and friends.
          </p>
          <p>
            Any agreement reached through mediation, whether verbal
            or written is not legally binding but it is more likely
            to succeed as it has not been imposed on the parties.
          </p>
          <p className="font-lato text-xl mt-4">
            Contact me to discuss your needs.
          </p>
        </div>
        <div className="w-100 md:w-1/3 flex items-center justify-center">
          <picture>
            <source srcSet={`${process.env.BACKEND_URL}${webpSrc}`} type="image/webp" />
            <source srcSet={`${process.env.BACKEND_URL}${imgSrc}`} type="image/jpeg" />
            <img
              src={`${process.env.BACKEND_URL}${imgSrc}`}
              alt="People shaking hands representing successful mediation"
            />
          </picture>
        </div>
      </div>
    </Layout>
  );
}
