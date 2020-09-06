import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import { getNavigationLinks } from '../lib/navigation';

export default function PrivacyNoticePage({ links }) {
  return (
    <Layout pageTitle="Complaint" links={links}>
      <NextSeo
        title="Privacy Notice"
        canonical={`${process.env.CANONICAL_URL}/privacynotice`}
        openGraph={{
          url: `${process.env.CANONICAL_URL}/privacynotice`,
          title: 'Privacy Notice | Wallis Consultancy',
        }}
      />
      <p className="font-lato text-2xl mb-6">
        Data Privacy Notice
      </p>
      <ol className="list-decimal mx-8 font-lato text-lg">
        <li className="my-4">
          <p>Your Personal Data - What is it?</p>
          <p className="font-open-sans text-sm">
            Personal data relates to a living individual who can be identified from that data.
            Identification can be by the information alone or in conjunction with any other
            information in the data controller’s possession or likely to come into such
            possession. The processing of personal data is governed by the General Data
            Protection Regulation (the “GDPR”).
          </p>
        </li>
        <li className="my-4">
          <p>Who are we?</p>
          <p className="font-open-sans text-sm">
            Wallis Consultancy is the data controller
            (contact details below).  This means it
            decides how your personal data is processed
            and for what purposes.
          </p>
        </li>
        <li className="my-4">
          <p>How do we process your personal data?</p>
          <p className="font-open-sans text-sm">
            Wallis Consultancy complies with its obligations under the “GDPR” by keeping personal
            data up to date; by storing and destroying it securely; by not collecting or retaining
            excessive amounts of data; by protecting personal data from loss, misuse, unauthorised
            access and disclosure and by ensuring that appropriate technical measures are in
            place to protect personal data.
          </p>
          <p className="font-open-sans text-sm">
            We may use your personal data for the following purposes: –
          </p>
          <ul className="list-disc ml-8 font-open-sans text-sm">
            <li>To enable us to take forward your instructions.</li>
            <li>To maintain our own accounts and records.</li>
            <li>
              Your contact details will never be shared with a 3rd
              party save in relation to items listed under paragraph
              4 or with your consent see paragraph 5.
            </li>
          </ul>
        </li>
        <li className="my-4">
          <p>What is the legal basis for processing your personal data?</p>
          <p className="font-open-sans text-sm">
            Wallis Consultancy is the data controller
            (contact details below).  This means it
            decides how your personal data is processed
            and for what purposes.
          </p>
          <ul className="list-disc ml-8 font-open-sans text-sm">
            <li>So that we can carry out your instructions to us.</li>
            <li>
              Where processing is necessary for carrying out legal
              obligations to include, but not limited to, in relation to tax.
            </li>
          </ul>
        </li>
        <li className="my-4">
          <p>Sharing your personal data</p>
          <p className="font-open-sans text-sm">
            Your personal data will be treated as strictly confidential
            and will only be shared with your express consent.
          </p>
        </li>
        <li className="my-4">
          <p>How long do we keep your personal data?</p>
          <p className="font-open-sans text-sm">
            We keep data for 6 months from the date that
            your involvement with the consultancy ceases.
          </p>
        </li>
        <li className="my-4">
          <p>Your rights and your personal data</p>
          <p className="font-open-sans text-sm">
            Unless subject to an exemption under the GDPR, you have
            the following rights with respect to your personal data: –
          </p>
          <ul className="list-disc ml-8 font-open-sans text-sm">
            <li>
              The right to request a copy of your personal
              data which Wallis Consultancy holds about you:
            </li>
            <li>
              The right to request that Wallis Consultancy corrects
              any personal data if it is found to be inaccurate or out of date;
            </li>
            <li>
              The right to request your personal data is erased where it is no
              longer necessary for Wallis Consultancy to retain such data;
            </li>
            <li>The right to withdraw your consent to the processing at any time</li>
            <li>
              The right to request that Wallis Consultancy
              transmit that data directly to another data controller,
            </li>
            <li>
              The right, where there is a dispute in relation to the accuracy or processing of your
              personal data, to request that a restriction is placed on further processing;
            </li>
            <li>The right to object to the processing of personal data,</li>
            <li>The right to lodge a complaint with the Information Commissioners Office.</li>
          </ul>
        </li>
        <li className="my-4">
          <p>Further processing</p>
          <p className="font-open-sans text-sm">
            If we wish to use your personal data for a new purpose,
            not covered by this Data Privacy Notice, then we will
            provide you with a new notice explaining this new use
            prior to commencing the processing and setting out the
            relevant purposes and processing conditions. Where and
            whenever necessary, we will seek your prior consent to the new processing.
          </p>
        </li>
        <li className="my-4">
          <p>Contact Details</p>
          <p className="font-open-sans text-sm">
            To exercise all relevant rights, queries of complaints please in the first
            instance contact Data Compliance at Wallis Consultancy, Brynhyfryd,
            Vicarage Road, Potten End, Hertfordshire,
            HP4 2QZ or by email to mw@wallisconsultancy.co.uk
          </p>
          <p className="font-open-sans text-sm">
            You can contact the Information Commissioners Office on 0303 123 1113,
            via the contact form on their website  or at the Information Commissioner’s
            Office, Wycliffe House, Water Lane, Wilmslow, Cheshire. SK9 5AF.
          </p>
        </li>
      </ol>
    </Layout>
  );
}

export async function getStaticProps() {
  const links = getNavigationLinks();
  return {
    props: {
      links,
    },
  };
}

PrivacyNoticePage.propTypes = {
  links: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};
