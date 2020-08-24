import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Layout from '../components/layout';

export default function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <NextSeo
        title="Home"
        canonical={process.env.CANONICAL_URL}
        openGraph={{
          url: process.env.CANONICAL_URL,
          title: 'Home | Wallis Consultancy',
        }}
      />
      <div className="flex flex-col md:flex-row text-base">
        <div className="w-100 md:w-2/3 sm:pr-4 md:pr-8">
          <p>
            If you are in dispute do you want:
          </p>
          <ul className="ml-8 list-disc">
            <li>A day in court,</li>
            <li>Continued disagreement,</li>
            <li>Depression as a result of tensions</li>
          </ul>
          <p className="my-8 font-semibold italic">
            Or
          </p>
          <p className="mb-8">
            A mutually agreed solution with peace of mind
            and the potential for an improved relationship?
          </p>
          <p className="mb-8">
            My experience, particularily as a family magistrate,
            is that mediation is by far the better way.
          </p>
          <p className="mb-8">
            If you agree then let me try to mediate for you.
          </p>
          <Link href="/mediation">
            <a className="mb-8 text-theme-green font-bold">
              Click here to find out where I can help
            </a>
          </Link>
        </div>
        <div className="mt-8 md:mt-0 w-100 md:w-1/3 flex items-center justify-center">
          <picture>
            {/* eslint-disable-next-line import/no-unresolved */}
            <source srcSet={require('../images/stress.jpg?webp')} type="image/webp" />
            <source srcSet={require('../images/stress.jpg')} type="image/jpeg" />
            <img
              src={require('../images/stress.jpg')}
              alt="A stressed person"
            />
          </picture>
        </div>
      </div>
    </Layout>
  );
}
