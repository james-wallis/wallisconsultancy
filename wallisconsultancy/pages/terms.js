import Layout from '../components/layout'

const termsAndConditions = [
  {
    heading: 'Interpretation',
    terms: [
      'For the purposes of these Terms of Business: references to "we", "us" and "our" are Wallis Consultancy.',
      'References to "you" and "your" are to the person or persons to whom our Terms of Business is addressed.',
      '"consultancy services" means the services to be provided in accordance with these Terms of Business.',
    ],
  },
  {
    heading: 'Conduct',
    terms: [
      'We shall carry out your instructions in accordance with applicable professional standards and act in your best interests at all times.',
    ],
  },
  {
    heading: 'Scope and basis of our work',
    terms: [
      'The consultancy service that we will offer relates to mediation.',
      'We may be required to hold and process information about your personal circumstances. In consequence it will be necessary for you, and you agree, to provide us with details of these and such other information and documents that we may specifically request and are necessary to act for you.',
      'We will rely on the information and documents that you provide us with as being true, correct and complete. We will not audit, test or check such information or documents except where this is inconsistent with our obligations under the law. You should let us know immediately of any changes that might affect the service and advice we provide you.',
      'You will provide all information reasonably requested by Wallis Consultancy in order to act for you.',
    ],
  },
  {
    heading: 'Communication',
    terms: [
      'Unless otherwise instructed, we shall communicate with you by e-mail or at your home address, normally by letter sent by normal postal services or, where appropriate, courier services.',
    ],
  },
  {
    heading: 'Fees',
    terms: [
      'You agree to pay us a fee relative to the service taken: Initial Meeting £75 each party to be paid at beginning of session by cheque or cash. Round Table or Shuttle Meeting £50 each party per hour to be paid at end of session by cheque or cash.',
    ],
  },
  {
    heading: 'Data Protection Act 2018',
    terms: [
      'During the period of our engagement we may request information about your personal and financial situation from you.',
      'The information that we obtain about your personal and financial situation may constitute "personal data" or "sensitive personal data" under the General Data Protection Regulations 2016 (GDPR) and Data Protection Act 1998. By signing these Terms of Business, you expressly consent that we may carry out such processing (whether obtaining, recording or holding) of such data as is necessary to enable us to carry out your instructions.',
      'Your personal data will be treated as strictly confidential and will only be shared with your express consent. We keep data for 6 years from the date that your involvement with the consultancy ceases.',
    ],
  },
  {
    heading: 'Confidentiality',
    terms: [
      'We shall not, without your prior written consent, disclose any confidential information concerning your personal or financial situation to third parties.',
    ],
  },
  {
    heading: 'Commencement, variation and termination',
    terms: [
      'Your continued instructions will amount to an acceptance of these Terms of Business.',
      'You may be requested to supply information or complete paperwork. If we do not receive the requested documents within 28 days of the initial request we will assume you are terminating our services.',
      'This agreement is subject to a 14 day cooling off period.',
      'These Terms of Business may be terminated by either party, with immediate effect, by giving notice in writing or by email.',
    ],
  },
  {
    heading: 'Invalidity',
    terms: [
      'If any provision (whether in whole or in part) of these Terms of Business is held to be illegal, invalid or unenforceable under any enactment or rule of law, such provision or part shall be deemed not to form part of these Terms of Business, and the legality and enforcement of the remainder of these Terms of Business shall not be affected.',
    ],
  },
  {
    heading: 'Applicable Law',
    terms: [
      'These Terms of Business shall be governed by, and construed in accordance with, English Law.',
    ],
  },
]

export default function TermsPage() {
  return (
    <Layout pageTitle="Terms and Conditions">
      <p className="font-lato text-2xl mb-6">
        Terms and Conditions
      </p>
      <p>
        The following terms constitute the Terms of Business (the "Terms of Business") of
        Michael Anthony Wallis trading as Wallis Consultancy to provide services as described below.
        They will apply to all transactions between both parties, unless varied in writing.
      </p>
      <ol>
        {termsAndConditions.map(({ heading, terms }, index) => (
          <li key={heading} className="my-6">
            <p className="text-lg">{`${index+1}. ${heading}`}</p>
            <ol className="ml-4 my-2">
              {terms.map((term, subindex) => (
                <li key={term} className="flex">
                  <span className="mr-2">{`${index+1}.${subindex+1}`}</span>
                  <span>{term}</span>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
