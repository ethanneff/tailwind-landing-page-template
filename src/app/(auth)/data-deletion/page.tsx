export const metadata = {
  title: 'Data Deletion',
  description: 'Page description',
};

export default function DataDeletion() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Data Deletion</h1>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 mb-5">
              To request the deletion of your user data, please follow the steps
              below:
            </p>
            <ol>
              <li className="text-xl text-gray-600 mb-5 list-decimal list-inside">
                Log in to your user account.
              </li>
              <li className="text-xl text-gray-600 mb-5 list-decimal list-inside">
                Navigate to the &quot;Settings&quot; or &quot;Account&quot;
                section.
              </li>
              <li className="text-xl text-gray-600 mb-5 list-decimal list-inside">
                Find the &quot;Data Deletion&quot; or &quot;Delete Account&quot;
                option.
              </li>
              <li className="text-xl text-gray-600 mb-5 list-decimal list-inside">
                Follow the prompts to initiate the deletion process.
              </li>
              <li className="text-xl text-gray-600 mb-5 list-decimal list-inside">
                Confirm the deletion request when prompted.
              </li>
            </ol>

            <p className="text-xl text-gray-600">
              Note: Please be aware that data deletion is irreversible and may
              result in permanent loss of your account and associated
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
