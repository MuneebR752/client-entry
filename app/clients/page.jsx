"use client";
import React from "react";
const page = () => {
  const [clients, setClients] = React.useState([]);
  React.useEffect(() => {
    const allClients = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/clients`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.ok) {
          const data = await res.json();
          setClients(data);
          return data;
        }
      } catch (e) {
        alert("Error: " + e.message);
      }
    };
    allClients();
  }, []);
  console.log(clients);
  const columns = [
    "Name",
    "Date of Birth",
    "Email",
    "Phone",
    "Address",
    "Status In Canada",
    "Arrival Date",
    "Height",
    "Weight",
    "Years In Canada",
    "Birth Country",
    "Marital Status",
    "Work Status",
    "Occupation",
    "Employer Name",
    "Employer Address",
    "Annual Income",
    "Smoking Status",
    "Drinking Status",
    "Family Doctor",
    "Clinic Address",
    "Doctor's Last Visit",
    "Any Family History",
    "Any Health Issues",
    "Dangerous Sports",
    "Replacing Old Policy",
    "Any Licence Suspension",
    "Face Amount",
    "Beneficiary 1",
    "Beneficiary 2",
    "Assets",
    "Liabilities",
    "Bank Number",
    "Transit Number",
    "Account Number",
    "Signature",
    "Created At",
  ];

  return (
    <main>
      <section className="bg-[#1f2937] w-full min-h-screen">
        <div className="flex flex-col">
          <div className="overflow-x-auto no-scrollbar">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border border-gray-700 divide-y divide-gray-700 rounded-lg">
                <div className="px-4 py-3">
                  <div className="relative max-w-xs">
                    <label htmlFor="hs-table-search" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      name="hs-table-search"
                      id="hs-table-search"
                      className="block w-full p-3 pl-10 text-sm text-gray-400 border-gray-700 rounded-md bg-slate-900"
                      placeholder="Search for items"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="h-3.5 w-3.5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase whitespace-nowrap"
                        >
                          #
                        </th>
                        <th scope="col" className="px-4 py-3 pr-0">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-table-search-checkbox-all"
                              type="checkbox"
                              className="text-blue-600 bg-gray-800 border-gray-700 rounded checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800"
                            />
                            <label
                              htmlFor="hs-table-search-checkbox-all"
                              className="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        {columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase whitespace-nowrap"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {clients.map((client, i) => (
                        <tr key={client.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                            {i + 1}
                          </td>
                          <td className="py-3 pl-4">
                            <div className="flex items-center h-5">
                              <input
                                id={`hs-table-search-checkbox-${i}`}
                                type="checkbox"
                                className=" rounded  bg-gray-800 border-gray-700 checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800"
                              />
                              <label
                                htmlFor="hs-table-search-checkbox-1"
                                className="sr-only"
                              >
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
                            {client.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.dob}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.statusInCanada}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.arrivalDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.height}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.weight}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.yearsInCanada}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.birthCountry}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.maritalStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.workStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.occupation}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.employerName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.employerAddress}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.annualIncome}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.smokingStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.drinkingStatus}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.familyDoctor}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.clinicAddress}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.doctorLastVisit}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.anyFamilyHistory}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.anyHealthIssues}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.dangerousSports}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.replacingOldPolicy}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.anyLicenceSuspension}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.faceAmount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.beneficiary1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.beneficiary2}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.assets}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.liabilities}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.bankNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.transitNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.accountNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.signature}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {client.createdAt}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
