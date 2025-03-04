import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Page description',
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Privacy Policy</h1>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-5">
              <strong>Privacy Policy</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              Ethan Neff built the Core app as a Commercial app. This SERVICE is
              provided by Ethan Neff and is intended for use as is.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              This page is used to inform visitors regarding my policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use my Service.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              If you choose to use my Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that I collect is used for providing and improving the
              Service. I will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at Core unless
              otherwise defined in this Privacy Policy.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Information Collection and Use</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              For a better experience, while using our Service, I may require
              you to provide us with certain personally identifiable
              information. The information that I request will be retained on
              your device and is not collected by me in any way.
            </p>
            <div>
              <p className="text-xl text-gray-600 mb-5">
                The app does use third-party services that may collect
                information used to identify you.
              </p>
              <p className="text-xl text-gray-600 mb-5">
                Link to the privacy policy of third-party service providers used
                by the app
              </p>
              <ul>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://www.google.com/policies/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Services
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://support.google.com/admob/answer/6128543?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AdMob
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://firebase.google.com/policies/analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics for Firebase
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://firebase.google.com/support/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase Crashlytics
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://www.facebook.com/about/privacy/update/printable"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://expo.io/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expo
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sentry
                  </Link>
                </li>
                <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                  <Link
                    href="https://mixpanel.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mixpanel
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Log Data</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              I want to inform you that whenever you use my Service, in a case
              of an error in the app I collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing my Service, the time and
              date of your use of the Service, and other statistics.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Cookies</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device&apos;s internal memory.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              This Service does not use these “cookies” explicitly. However, the
              app may use third-party code and libraries that use “cookies” to
              collect information and improve their services. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your device. If you choose to refuse our
              cookies, you may not be able to use some portions of this Service.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Service Providers</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              I may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul>
              <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                To facilitate our Service;
              </li>
              <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                To provide the Service on our behalf;
              </li>
              <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                To perform Service-related services; or
              </li>
              <li className="text-xl text-gray-600 mb-5 list-disc list-inside">
                To assist us in analyzing how our Service is used.
              </li>
            </ul>
            <p className="text-xl text-gray-600 mb-5">
              I want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Security</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              I value your trust in providing us your Personal Information, thus
              we are striving to use commercially acceptable means of protecting
              it. But remember that no method of transmission over the internet,
              or method of electronic storage is 100% secure and reliable, and I
              cannot guarantee its absolute security.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Links to Other Sites</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by me. Therefore, I strongly
              advise you to review the Privacy Policy of these websites. I have
              no control over and assume no responsibility for the content,
              privacy policies, or practices of any third-party sites or
              services.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Children’s Privacy</strong>
            </p>
            <div>
              <p className="text-xl text-gray-600 mb-5">
                These Services do not address anyone under the age of 13. I do
                not knowingly collect personally identifiable information from
                children under 13 years of age. In the case I discover that a
                child under 13 has provided me with personal information, I
                immediately delete this from our servers. If you are a parent or
                guardian and you are aware that your child has provided us with
                personal information, please contact me so that I will be able
                to do the necessary actions.
              </p>
            </div>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Changes to This Privacy Policy</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              I may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. I will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              This policy is effective as of 2023-06-02
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong className="pt-5">Contact Us</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at ethan.neff@eneff.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
