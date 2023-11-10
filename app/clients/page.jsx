"use client";
import React, { useState } from "react";
import columns from "./constants";
const page = () => {
  const [selectedClients, setSelectedClients] = useState([]);
  const [clients, setClients] = React.useState([]);
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const allClients = async () => {
      try {
        const res = await fetch(`${location.origin}/api/clients`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
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
  }, [clients]);
  const handleCheckboxChange = (clientId) => {
    if (selectedClients.includes(clientId)) {
      setSelectedClients((prevSelectedClients) =>
        prevSelectedClients.filter((id) => id !== clientId)
      );
    } else {
      setSelectedClients((prevSelectedClients) => [
        ...prevSelectedClients,
        clientId,
      ]);
    }
  };
  const handleDelete = async () => {
    if (selectedClients.length > 0) {
      if (confirm("Are you sure you want to delete?")) {
        selectedClients.map(async (id) => {
          try {
            const res = await fetch(`${location.origin}/api/clients/`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ id }),
            });
          } catch (e) {
            alert("Error: " + e.message);
          }
        });
      }
    } else {
      alert("Please select a client");
    }
  };
  return (
    <main>
      <section className="bg-[#1f2937] w-full min-h-screen">
        <div className="flex flex-col">
          <div className="overflow-x-auto no-scrollbar">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border border-gray-700 divide-y divide-gray-700 rounded-lg">
                <div className="flex gap-8 px-4 py-3">
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
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
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
                  <button
                    className="px-5 text-white bg-red-600 rounded-md hover:bg-red-700"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Delete
                  </button>
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
                              checked={
                                selectedClients.length != 0 &&
                                selectedClients.length === clients.length
                              }
                              onChange={() => {
                                if (selectedClients.length === clients.length) {
                                  setSelectedClients([]);
                                } else {
                                  setSelectedClients(
                                    clients.map((client) => client.id)
                                  );
                                }
                              }}
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
                      {clients
                        .filter((client) =>
                          Object.values(client).some(
                            (value) =>
                              value &&
                              value
                                .toString()
                                .toLowerCase()
                                .includes(search.toLowerCase())
                          )
                        )
                        .map((client, i) => (
                          <tr key={client.id}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
                              {i + 1}
                            </td>
                            <td className="py-3 pl-4">
                              <div className="flex items-center h-5">
                                <input
                                  id={`hs-table-search-checkbox-${i}`}
                                  type="checkbox"
                                  className="bg-gray-800 border-gray-700 rounded checked:bg-blue-500 checked:border-blue-500 focus:ring-offset-gray-800"
                                  checked={selectedClients.includes(client.id)}
                                  onChange={() =>
                                    handleCheckboxChange(client.id)
                                  }
                                />
                                <label
                                  htmlFor="hs-table-search-checkbox-1"
                                  className="sr-only"
                                >
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
                              {client.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.dob}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.phone}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.address}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.city}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.streetNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.suiteNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.postalCode}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.statusInCanada}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.arrivalDate}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.yearsInCanada}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.birthCountry}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.height}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.weight}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.maritalStatus}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.noOfChildren}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.noOfMaleChildren}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.noOfFemaleChildren}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.noOfInfantChildren}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.workStatus}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.occupation}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerName}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerAddress}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerCity}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerStreetNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerSuiteNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.employerPostalCode}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.annualIncome}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.smokingStatus}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.drinkingStatus}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.familyDoctor}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.clinicAddress}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.clinicCity}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.clinicStreetNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.clinicSuiteNo}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.clinicPostalCode}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.doctorLastVisit}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.anyFamilyHistory}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.anyHealthIssues}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.dangerousSports}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.replacingOldPolicy}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.anyLicenceSuspension}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.faceAmount}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.beneficiary1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.beneficiary2}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.assets}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.liabilities}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.bankNumber}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.transitNumber}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.accountNumber}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
                              {client.signature}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-200 whitespace-nowrap">
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
