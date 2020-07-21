import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <div className="flex">
        <div className="w-2/3">
          <p>
            I am a retired senior banker with experience in both mediation and business support,
            personable and able to communicate easily at all levels.
          </p>
          <p>
            Having worked within the family court judiciary for over twenty years
            I have gained a valuable insight into how the family court system operates.
            As such I am particularly highly regarded in family mediation but also in
            neighbourhood and workplace mediation. My experience in the family court
            has shown me that the court process should be used as a last resort and
            that mediation has an important role in helping parties move forward
            from conflict and breakdown to agreement and brighter futures.
          </p>
          <p>
            Please let me know how I can help you. Contact me by sending an email
            with a brief description of your needs or give me a call.
            I will make contact with you within 24 hours.
          </p>
          <p>
            I look forward to hearing from you and working with you.
          </p>
          <p>
            Mike Wallis
          </p>
          <p>
            Wallis Consultancy
          </p>
          <p>
            BSc (Hons), FCIB, CeMAP
          </p>
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <img src="/images/mike-wallis2.png" alt="Mike Wallis" />
        </div>
      </div>
    </Layout>
  )
}
