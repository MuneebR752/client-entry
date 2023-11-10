"use client";
import React from "react";
export default function Home() {
  const [data, setData] = React.useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    streetNo: "",
    suiteNo: "",
    postalCode: "",
    statusInCanada: "Citizen",
    arrivalDate: "",
    height: "",
    weight: "",
    yearsInCanada: "",
    birthCountry: "",
    maritalStatus: "Single",
    noOfChildren: "",
    noOfMaleChildren: "",
    noOfFemaleChildren: "",
    noOfInfantChildren: "",
    workStatus: "Employed",
    occupation: "",
    employerName: "",
    employerAddress: "",
    employerCity: "",
    employerStreetNo: "",
    employerSuiteNo: "",
    employerPostalCode: "",
    annualIncome: "",
    smokingStatus: "Non-Smoker",
    drinkingStatus: "Non-Drinker",
    familyDoctor: "",
    clinicAddress: "",
    clinicCity: "",
    clinicStreetNo: "",
    clinicSuiteNo: "",
    clinicPostalCode: "",
    doctorLastVisit: "",
    anyFamilyHistory: "",
    anyHealthIssues: "",
    dangerousSports: "",
    replacingOldPolicy: "",
    anyLicenceSuspension: "",
    faceAmount: "",
    beneficiary1: "",
    beneficiary2: "",
    assets: "",
    liabilities: "",
    bankNumber: "",
    transitNumber: "",
    accountNumber: "",
    signature: "",
  });
  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    let confirmation = confirm("Are you sure you want to submit?");
    if (confirmation) {
      try {
        let res = await fetch(`${location.origin}/api/clients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          alert("Data Submitted Successfully!");
          setData({
            name: "",
            dob: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            streetNo: "",
            suiteNo: "",
            postalCode: "",
            statusInCanada: "Citizen",
            arrivalDate: "",
            height: "",
            weight: "",
            yearsInCanada: "",
            birthCountry: "",
            maritalStatus: "Single",
            noOfChildren: "",
            noOfMaleChildren: "",
            noOfFemaleChildren: "",
            noOfInfantChildren: "",
            workStatus: "Employed",
            occupation: "",
            employerName: "",
            employerAddress: "",
            employerCity: "",
            employerStreetNo: "",
            employerSuiteNo: "",
            employerPostalCode: "",
            annualIncome: "",
            smokingStatus: "Non-Smoker",
            drinkingStatus: "Non-Drinker",
            familyDoctor: "",
            clinicAddress: "",
            clinicCity: "",
            clinicStreetNo: "",
            clinicSuiteNo: "",
            clinicPostalCode: "",
            doctorLastVisit: "",
            anyFamilyHistory: "",
            anyHealthIssues: "",
            dangerousSports: "",
            replacingOldPolicy: "",
            anyLicenceSuspension: "",
            faceAmount: "",
            beneficiary1: "",
            beneficiary2: "",
            assets: "",
            liabilities: "",
            bankNumber: "",
            transitNumber: "",
            accountNumber: "",
            signature: "",
          });
        }
        return res.json();
      } catch (err) {
        alert("Something went wrong!");
        console.log(err);
      }
    }
    return;
  };
  return (
    <main>
      <section className="h-[calc(100vh-3.5rem)] bg-[#1f2937] flex justify-center items-center text-white">
        <section className="container flex flex-col w-full h-full gap-8 mx-4 my-6 sm:flex-row">
          <div className="sm:w-[70%] w-full overflow-y-scroll no-scrollbar">
            <form className="grid grid-cols-1 gap-6 my-6 sm:grid-cols-2">
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Personal Information
              </h3>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="John Doe"
                  value={data.name}
                />
              </div>
              <div>
                <label htmlFor="dob" className="block mb-2 text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.dob}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="you@site.com"
                  value={data.email}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium"
                >
                  Cell Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  value={data.phone}
                />
              </div>
              <h3 className="my-4 font-medium sm:col-span-2">Personal Address</h3>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="House #, Street #, City"
                  value={data.address}
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Ottawa"
                  value={data.city}
                />
              </div>
              <div>
                <label
                  htmlFor="streetNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Street #
                </label>
                <input
                  type="number"
                  id="streetNo"
                  name="streetNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="2"
                  value={data.streetNo}
                />
              </div>
              <div>
                <label
                  htmlFor="suiteNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Unit / Suite #
                </label>
                <input
                  type="number"
                  id="suiteNo"
                  name="suiteNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="2"
                  value={data.suiteNo}
                />
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block mb-2 text-sm font-medium"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  id="postalCode"
                  name="postalCode"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="54000"
                  value={data.postalCode}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Residencial Information
              </h3>
              <div>
                <label
                  htmlFor="statusInCanada"
                  className="block mb-2 text-sm font-medium"
                >
                  Status in Canada
                </label>
                <select
                  id="statusInCanada"
                  name="statusInCanada"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.statusInCanada}
                >
                  <option defaultValue={true} value="Citizen">
                    Citizen
                  </option>
                  <option value="PermanentResident">Permanent Resident</option>
                  <option value="Visitor">Visitor</option>
                  <option value="Student">Student</option>
                  <option value="Work Permit">Work Permit</option>
                  <option value="Refugee">Refugee</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="arrivalDate"
                  className="block mb-2 text-sm font-medium"
                >
                  Arrival Date (If Permanent Residence)
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.arrivalDate}
                />
              </div>
              <div>
                <label
                  htmlFor="yearsInCanada"
                  className="block mb-2 text-sm font-medium"
                >
                  No of Years in Canada
                </label>
                <input
                  type="number"
                  id="yearsInCanada"
                  name="yearsInCanada"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="12"
                  value={data.yearsInCanada}
                />
              </div>
              <div>
                <label
                  htmlFor="birthCountry"
                  className="block mb-2 text-sm font-medium"
                >
                  Birth Country
                </label>
                <input
                  type="text"
                  id="birthCountry"
                  name="birthCountry"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Pakistan"
                  value={data.birthCountry}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Physical Information
              </h3>
              <div>
                <label
                  htmlFor="height"
                  className="block mb-2 text-sm font-medium"
                >
                  Height (in feet)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="5.6"
                  value={data.height}
                />
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium"
                >
                  Weight (in kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="65"
                  value={data.weight}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Marital Information
              </h3>
              <div>
                <label
                  htmlFor="maritalStatus"
                  className="block mb-2 text-sm font-medium"
                >
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.maritalStatus}
                >
                  <option defaultValue={true} value="Single">
                    Single
                  </option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              {data.maritalStatus === "Married" && (
                <div>
                  <label
                    htmlFor="noOfChildren"
                    className="block mb-2 text-sm font-medium"
                  >
                    No Of Children
                  </label>
                  <input
                    type="number"
                    id="noOfChildren"
                    name="noOfChildren"
                    className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                    onChange={handleChange}
                    placeholder="3"
                    value={data.noOfChildren}
                  />
                </div>
              )}
              {data.noOfChildren > 0 && (
                <>
                  <div>
                    <label
                      htmlFor="noOfMaleChildren"
                      className="block mb-2 text-sm font-medium"
                    >
                      No Of Male Children
                    </label>
                    <input
                      type="number"
                      id="noOfMaleChildren"
                      name="noOfMaleChildren"
                      className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                      onChange={handleChange}
                      placeholder="2"
                      value={data.noOfMaleChildren}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="noOfFemaleChildren"
                      className="block mb-2 text-sm font-medium"
                    >
                      No Of Female Children
                    </label>
                    <input
                      type="number"
                      id="noOfFemaleChildren"
                      name="noOfFemaleChildren"
                      className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                      onChange={handleChange}
                      placeholder="2"
                      value={data.noOfFemaleChildren}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="noOfInfantChildren"
                      className="block mb-2 text-sm font-medium"
                    >
                      No Of Infants
                    </label>
                    <input
                      type="number"
                      id="noOfInfantChildren"
                      name="noOfInfantChildren"
                      className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                      onChange={handleChange}
                      placeholder="1"
                      value={data.noOfInfantChildren}
                    />
                  </div>
                </>
              )}
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Employment Information
              </h3>
              <div>
                <label
                  htmlFor="workStatus"
                  className="block mb-2 text-sm font-medium"
                >
                  Work Status
                </label>
                <select
                  id="workStatus"
                  name="workStatus"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.workStatus}
                >
                  <option defaultValue={true} value="Employed">
                    Employed
                  </option>
                  <option value="Unemployed">Unemployed</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="occupation"
                  className="block mb-2 text-sm font-medium"
                >
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Doctor"
                  value={data.occupation}
                />
              </div>
              <div>
                <label
                  htmlFor="employerName"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer Name
                </label>
                <input
                  type="text"
                  id="employerName"
                  name="employerName"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="James Franklin"
                  value={data.employerName}
                />
              </div>
              <h3 className="my-4 font-medium sm:col-span-2">Employer Address</h3>
              <div>
                <label
                  htmlFor="employerAddress"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer's Address
                </label>
                <input
                  type="text"
                  id="employerAddress"
                  name="employerAddress"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123, Street #, City"
                  value={data.employerAddress}
                />
              </div>
              <div>
                <label
                  htmlFor="employerCity"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer City
                </label>
                <input
                  type="text"
                  id="employerCity"
                  name="employerCity"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Ottawa"
                  value={data.employerCity}
                />
              </div>
              <div>
                <label
                  htmlFor="employerStreetNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer Street #
                </label>
                <input
                  type="number"
                  id="employerStreetNo"
                  name="employerStreetNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="2"
                  value={data.employerStreetNo}
                />
              </div>
              <div>
                <label
                  htmlFor="employerSuiteNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer Suite #
                </label>
                <input
                  type="number"
                  id="employerSuiteNo"
                  name="employerSuiteNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="2"
                  value={data.employerSuiteNo}
                />
              </div>
              <div>
                <label
                  htmlFor="employerPostalCode"
                  className="block mb-2 text-sm font-medium"
                >
                  Employer Postal Code
                </label>
                <input
                  type="number"
                  id="employerPostalCode"
                  name="employerPostalCode"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="54000"
                  value={data.employerPostalCode}
                />
              </div>
              <div>
                <label
                  htmlFor="annualIncome"
                  className="block mb-2 text-sm font-medium"
                >
                  Annual Income (in CAD)
                </label>
                <input
                  type="number"
                  id="annualIncome"
                  name="annualIncome"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="12,000"
                  value={data.annualIncome}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Health Information
              </h3>
              <div>
                <label
                  htmlFor="smokingStatus"
                  className="block mb-2 text-sm font-medium"
                >
                  Smoking Status
                </label>
                <select
                  id="smokingStatus"
                  name="smokingStatus"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.smokingStatus}
                >
                  <option value="Smoker">smoker</option>
                  <option defaultValue={true} value="Non-Smoker">
                    Non-smoker
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="drinkingStatus"
                  className="block mb-2 text-sm font-medium"
                >
                  Drinking Status
                </label>
                <select
                  id="drinkingStatus"
                  name="drinkingStatus"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.drinkingStatus}
                >
                  <option value="Drinker">Drinker</option>
                  <option defaultValue={true} value="Non-Drinker">
                    Non-Drinker
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="familyDoctor"
                  className="block mb-2 text-sm font-medium"
                >
                  Family Doctor
                </label>
                <input
                  type="text"
                  id="familyDoctor"
                  name="familyDoctor"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Dr John Doe"
                  value={data.familyDoctor}
                />
              </div>
              <h3 className="my-4 font-medium sm:col-span-2">Clinic Address</h3>
              <div>
                <label
                  htmlFor="clinicAddress"
                  className="block mb-2 text-sm font-medium"
                >
                  Clinic Address
                </label>
                <input
                  type="text"
                  id="clinicAddress"
                  name="clinicAddress"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123, Street #, City"
                  value={data.clinicAddress}
                />
              </div>
              <div>
                <label
                  htmlFor="clinicCity"
                  className="block mb-2 text-sm font-medium"
                >
                  Clinic City
                </label>
                <input
                  type="text"
                  id="clinicCity"
                  name="clinicCity"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Ottawa"
                  value={data.clinicCity}
                />
              </div>
              <div>
                <label
                  htmlFor="clinicStreetNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Clinic Street #
                </label>
                <input
                  type="number"
                  id="clinicStreetNo"
                  name="clinicStreetNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="123"
                  value={data.clinicStreetNo}
                />
              </div>
              <div>
                <label
                  htmlFor="clinicSuiteNo"
                  className="block mb-2 text-sm font-medium"
                >
                  Clinic Suite #
                </label>
                <input
                  type="number"
                  id="clinicSuiteNo"
                  name="clinicSuiteNo"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="2"
                  value={data.clinicSuiteNo}
                />
              </div>
              <div>
                <label
                  htmlFor="clinicPostalCode"
                  className="block mb-2 text-sm font-medium"
                >
                  Clinic Postal Code
                </label>
                <input
                  type="number"
                  id="clinicPostalCode"
                  name="clinicPostalCode"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="54000"
                  value={data.clinicPostalCode}
                />
              </div>
              <div>
                <label
                  htmlFor="doctorLastVisit"
                  className="block mb-2 text-sm font-medium"
                >
                  Doctor's Last Visit
                </label>
                <input
                  type="date"
                  id="doctorLastVisit"
                  name="doctorLastVisit"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.doctorLastVisit}
                />
              </div>
              <div>
                <label
                  htmlFor="anyFamilyHistory"
                  className="block mb-2 text-sm font-medium"
                >
                  Any Family History
                </label>
                <input
                  type="text"
                  id="anyFamilyHistory"
                  name="anyFamilyHistory"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Diabetes"
                  value={data.anyFamilyHistory}
                />
              </div>
              <div>
                <label
                  htmlFor="anyHealthIssues"
                  className="block mb-2 text-sm font-medium"
                >
                  Any Health Issues
                </label>
                <input
                  type="text"
                  id="anyHealthIssues"
                  name="anyHealthIssues"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Diabetes"
                  value={data.anyHealthIssues}
                />
              </div>
              <div>
                <label
                  htmlFor="dangerousSports"
                  className="block mb-2 text-sm font-medium"
                >
                  Dangerous Sports
                </label>
                <input
                  type="text"
                  id="dangerousSports"
                  name="dangerousSports"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="High Altitude Climbing"
                  value={data.dangerousSports}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Insurance Information
              </h3>
              <div>
                <label
                  htmlFor="replacingOldPolicy"
                  className="block mb-2 text-sm font-medium"
                >
                  Replacing Old Policy
                </label>
                <select
                  id="replacingOldPolicy"
                  name="replacingOldPolicy"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.replacingOldPolicy}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="anyLicenceSuspension"
                  className="block mb-2 text-sm font-medium"
                >
                  Any Licence Suspension
                </label>

                <select
                  name="anyLicenceSuspension"
                  id="anyLicenceSuspension"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.anyLicenceSuspension}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="faceAmount"
                  className="block mb-2 text-sm font-medium"
                >
                  Face Amount ($)
                </label>
                <input
                  type="number"
                  id="faceAmount"
                  name="faceAmount"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="$100,000"
                  value={data.faceAmount}
                />
              </div>
              <div>
                <label
                  htmlFor="beneficiary1"
                  className="block mb-2 text-sm font-medium"
                >
                  Beneficiary 1
                </label>
                <input
                  type="text"
                  id="beneficiary1"
                  name="beneficiary1"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="John doe"
                  value={data.beneficiary1}
                />
              </div>
              <div>
                <label
                  htmlFor="beneficiary2"
                  className="block mb-2 text-sm font-medium"
                >
                  Beneficiary 2
                </label>
                <input
                  type="text"
                  id="beneficiary2"
                  name="beneficiary2"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="John doe"
                  value={data.beneficiary2}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <h3 className="my-4 text-xl font-medium text-center sm:col-span-2">
                Financial Information
              </h3>
              <div>
                <label
                  htmlFor="assets"
                  className="block mb-2 text-sm font-medium"
                >
                  Assets
                </label>
                <input
                  type="text"
                  id="assets"
                  name="assets"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="$100,000"
                  value={data.assets}
                />
              </div>
              <div>
                <label
                  htmlFor="liabilities"
                  className="block mb-2 text-sm font-medium"
                >
                  Liabilities
                </label>
                <input
                  type="text"
                  id="liabilities"
                  name="liabilities"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="$100,000"
                  value={data.liabilities}
                />
              </div>
              <div>
                <label
                  htmlFor="bankNumber"
                  className="block mb-2 text-sm font-medium"
                >
                  Bank #
                </label>
                <input
                  type="number"
                  id="bankNumber"
                  name="bankNumber"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123456789"
                  value={data.bankNumber}
                />
              </div>
              <div>
                <label
                  htmlFor="transitNumber"
                  className="block mb-2 text-sm font-medium"
                >
                  Transit #
                </label>
                <input
                  type="number"
                  id="transitNumber"
                  name="transitNumber"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123456789"
                  value={data.transitNumber}
                />
              </div>
              <div>
                <label
                  htmlFor="accountNumber"
                  className="block mb-2 text-sm font-medium"
                >
                  Account #
                </label>
                <input
                  type="number"
                  id="accountNumber"
                  name="accountNumber"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123456789"
                  value={data.accountNumber}
                />
              </div>
              <hr className="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded sm:col-span-2 md:my-10"></hr>
              <div>
                <label
                  htmlFor="signature"
                  className="block mb-2 text-sm font-medium"
                >
                  Signature
                </label>
                <input
                  type="text"
                  id="signature"
                  name="signature"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  value={data.signature}
                  placeholder="AA"
                />
              </div>
              <div></div>
              <div></div>
              <div className="flex items-end justify-center gap-8">
                <button
                  onClick={submit}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  onClick={() => {
                    setData({
                      name: "",
                      dob: "",
                      email: "",
                      phone: "",
                      address: "",
                      statusInCanada: "Citizen",
                      arrivalDate: "",
                      height: "",
                      weight: "",
                      yearsInCanada: "",
                      birthCountry: "",
                      maritalStatus: "Single",
                      workStatus: "Employed",
                      occupation: "",
                      employerName: "",
                      employerAddress: "",
                      annualIncome: "",
                      smokingStatus: "Non-Smoker",
                      drinkingStatus: "Non-Drinker",
                      familyDoctor: "",
                      clinicAddress: "",
                      doctorLastVisit: "",
                      anyFamilyHistory: "",
                      anyHealthIssues: "",
                      dangerousSports: "",
                      replacingOldPolicy: "",
                      anyLicenceSuspension: "",
                      faceAmount: "",
                      beneficiary1: "",
                      beneficiary2: "",
                      assets: "",
                      liabilities: "",
                      bankNumber: "",
                      transitNumber: "",
                      accountNumber: "",
                      signature: "",
                    });
                  }}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="sm:max-w-[30%] w-full overflow-y-scroll no-scrollbar">
            <div className="flex flex-col justify-center w-full gap-4 my-4">
              <h4 className="my-6 text-lg font-medium">Preview</h4>
              <div className="flex w-full gap-4">
                <p>Name : </p>
                <p>{data.name}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Date of Birth : </p>
                <p>{data.dob}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Email : </p>
                <p>{data.email}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Cell Number : </p>
                <p>{data.phone}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Address : </p>
                <p>{data.address}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Status in Canada : </p>
                <p>{data.statusInCanada}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Arrival Date : </p>
                <p>{data.arrivalDate}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Height : </p>
                <p>{data.height}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Weight : </p>
                <p>{data.weight}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>No of Years in Canada : </p>
                <p>{data.yearsInCanada}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Birth Country : </p>
                <p>{data.birthCountry}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Marital Status : </p>
                <p>{data.maritalStatus}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Work Status : </p>
                <p>{data.workStatus}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Occupation : </p>
                <p>{data.occupation}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Employer Name : </p>
                <p>{data.employerName}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Employer's Address : </p>
                <p>{data.employerAddress}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Annual Income : </p>
                <p>{data.annualIncome}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>smoking Status : </p>
                <p>{data.smokingStatus}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Drinking Status : </p>
                <p>{data.drinkingStatus}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Family Doctor : </p>
                <p>{data.familyDoctor}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Clinic Address : </p>
                <p>{data.clinicAddress}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Doctor's Last Visit : </p>
                <p>{data.doctorLastVisit}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Any Family History : </p>
                <p>{data.anyFamilyHistory}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Any Health Issues : </p>
                <p>{data.anyHealthIssues}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Dangerous Sports : </p>
                <p>{data.dangerousSports}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Replacing Old Policy : </p>
                <p>{data.replacingOldPolicy}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Any Licence Suspension : </p>
                <p>{data.anyLicenceSuspension}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Face Amount : </p>
                <p>{data.faceAmount}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Beneficiary 1 : </p>
                <p>{data.beneficiary1}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Beneficiary 2 : </p>
                <p>{data.beneficiary2}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Assets : </p>

                <p>{data.assets}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Liabilities : </p>
                <p>{data.liabilities}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Bank # : </p>
                <p>{data.bankNumber}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Transit # : </p>
                <p>{data.transitNumber}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Account # : </p>
                <p>{data.accountNumber}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>Signature : </p>
                <p>{data.signature}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
