import { NextSeo } from 'next-seo';
import Layout from '../components/layout';

export default function ComplaintPage() {
  return (
    <Layout pageTitle="Complaints">
      <NextSeo
        title="Complaints"
        canonical={`${process.env.CANONICAL_URL}/complaint`}
        openGraph={{
          url: `${process.env.CANONICAL_URL}/complaint`,
          title: 'Complaints',
        }}
      />
      <p className="font-lato text-2xl mb-6">
        Complaints
      </p>
      <p>
        Our objective is to provide you with a high quality service to meet your needs.
        However, if at any time you wish to make a complaint about any aspect of the advice
        or service you have received in respect of your claim then please contact me
        immediately so that we can do our best to resolve the problem for you.
      </p>
      <p>
        An electronic acknowledgment of any complaint would be made within five business
        days of receipt of such with a final response within four weeks of receiving the
        complaint or a holding response explaining why we are not in a position to resolve
        the complaint and indicating when we will make further contact which will be within
        eight weeks of receipt of the complaint.
      </p>
    </Layout>
  );
}
