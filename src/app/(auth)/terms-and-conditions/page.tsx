import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Page description',
};

export default function TermsAndConditions() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Terms and Conditions</h1>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-5">
              <strong>Terms &amp; Conditions</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              By downloading or using the app, these terms will automatically
              apply to you – you should make sure therefore that you read them
              carefully before using the app. You’re not allowed to copy or
              modify the app, any part of the app, or our trademarks in any way.
              You’re not allowed to attempt to extract the source code of the
              app, and you also shouldn’t try to translate the app into other
              languages or make derivative versions. The app itself, and all the
              trademarks, copyright, database rights, and other intellectual
              property rights related to it, still belong to Ethan Neff.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              Ethan Neff is committed to ensuring that the app is as useful and
              efficient as possible. For that reason, we reserve the right to
              make changes to the app or to charge for its services, at any time
              and for any reason. We will never charge you for the app or its
              services without making it very clear to you exactly what you’re
              paying for.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              The Core app stores and processes personal data that you have
              provided to us, to provide my Service. It’s your responsibility to
              keep your phone and access to the app secure. We therefore
              recommend that you do not jailbreak or root your phone, which is
              the process of removing software restrictions and limitations
              imposed by the official operating system of your device. It could
              make your phone vulnerable to malware/viruses/malicious programs,
              compromise your phone’s security features and it could mean that
              the Core app won’t work properly or at all.
            </p>
            <div>
              <p className="text-xl text-gray-600 mb-5">
                The app does use third-party services that declare their Terms
                and Conditions.
              </p>
              <p className="text-xl text-gray-600 mb-5">
                Link to Terms and Conditions of third-party service providers
                used by the app
              </p>
              <ul>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Services
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://developers.google.com/admob/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AdMob
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://firebase.google.com/terms/analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics for Firebase
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://firebase.google.com/terms/crashlytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase Crashlytics
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://www.facebook.com/legal/terms/plain_text_terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://expo.io/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expo
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://sentry.io/terms/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sentry
                  </Link>
                </li>
                <li className="text-xl text-gray-600 list-inside list-disc">
                  <Link
                    href="https://mixpanel.com/legal/terms-of-use/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mixpanel
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-xl text-gray-600 mb-5">
              You should be aware that there are certain things that Ethan Neff
              will not take responsibility for. Certain functions of the app
              will require the app to have an active internet connection. The
              connection can be Wi-Fi or provided by your mobile network
              provider, but Ethan Neff cannot take responsibility for the app
              not working at full functionality if you don’t have access to
              Wi-Fi, and you don’t have any of your data allowance left.
            </p>
            <p className="text-xl text-gray-600 mb-5"></p>
            <p className="text-xl text-gray-600 mb-5">
              If you’re using the app outside of an area with Wi-Fi, you should
              remember that the terms of the agreement with your mobile network
              provider will still apply. As a result, you may be charged by your
              mobile provider for the cost of data for the duration of the
              connection while accessing the app, or other third-party charges.
              In using the app, you’re accepting responsibility for any such
              charges, including roaming data charges if you use the app outside
              of your home territory (i.e. region or country) without turning
              off data roaming. If you are not the bill payer for the device on
              which you’re using the app, please be aware that we assume that
              you have received permission from the bill payer for using the
              app.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              Along the same lines, Ethan Neff cannot always take responsibility
              for the way you use the app i.e. You need to make sure that your
              device stays charged – if it runs out of battery and you can’t
              turn it on to avail the Service, Ethan Neff cannot accept
              responsibility.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              With respect to Ethan Neff’s responsibility for your use of the
              app, when you’re using the app, it’s important to bear in mind
              that although we endeavor to ensure that it is updated and correct
              at all times, we do rely on third parties to provide information
              to us so that we can make it available to you. Ethan Neff accepts
              no liability for any loss, direct or indirect, you experience as a
              result of relying wholly on this functionality of the app.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              At some point, we may wish to update the app. The app is currently
              available on Android – the requirements for the system(and for any
              additional systems we decide to extend the availability of the app
              to) may change, and you’ll need to download the updates if you
              want to keep using the app. Ethan Neff does not promise that it
              will always update the app so that it is relevant to you and/or
              works with the Android version that you have installed on your
              device. However, you promise to always accept updates to the
              application when offered to you, We may also wish to stop
              providing the app, and may terminate use of it at any time without
              giving notice of termination to you. Unless we tell you otherwise,
              upon any termination, (a) the rights and licenses granted to you
              in these terms will end; (b) you must stop using the app, and (if
              needed) delete it from your device.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong>Changes to This Terms and Conditions</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              I may update our Terms and Conditions from time to time. Thus, you
              are advised to review this page periodically for any changes. I
              will notify you of any changes by posting the new Terms and
              Conditions on this page.
            </p>
            <p className="text-xl text-gray-600 mb-5">
              These terms and conditions are effective as of 2023-06-02
            </p>
            <p className="text-xl text-gray-600 mb-5">
              <strong>Contact Us</strong>
            </p>
            <p className="text-xl text-gray-600 mb-5">
              If you have any questions or suggestions about my Terms and
              Conditions, do not hesitate to contact me at ethan.neff@eneff.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
