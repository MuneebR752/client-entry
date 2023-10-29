"use client";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState({
    name: "",
    dob: "",
    SIN: "",
    email: "",
    phone: "",
    IDVerification: "",
    IDExpiryDate: "",
    address: "",
    statusInCanada: "",
    arrivalDate: "",
    height: "",
    weight: "",
    yearsInCanada: "",
    birthCountry: "",
    maritalStatus: "",
    workStatus: "",
    occupation: "",
    employerName: "",
    employerAddress: "",
    annualIncome: "",
    smookingStatus: "",
    drinkingStatus: "",
    familyDoctor: "",
    doctorAddress: "",
    doctorLastVisit: "",
    anyFamilyHistory: "",
    anyHealthIssues: "",
    dangerousSports: "",
    replacingOldPolicy: "",
    anyLicenceSuspension: "",
    faceAmount: "",
    beneficiary: "",
    assets: "",
    liabilities: "",
    covid: "",
    bankNumber: "",
    transitNumber: "",
    accountNumber: "",
    signature: "",
  });
  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <section className="h-[calc(100vh-3.5rem)] bg-[#1f2937] flex justify-center items-center text-white">
        <section className="container flex w-full h-full gap-8 mx-4 my-6">
          <div className="w-[70%] overflow-y-scroll no-scrollbar">
            <h3 className="my-4 text-xl font-medium">Add Client Data</h3>
            <form className="grid grid-cols-2 gap-6 my-6">
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
                />
              </div>
              <div>
                <label htmlFor="SIN" className="block mb-2 text-sm font-medium">
                  SIN#
                </label>
                <input
                  type="number"
                  id="SIN"
                  name="SIN"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="51234"
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
                />
              </div>
              <div>
                <label
                  htmlFor="IDVerification"
                  className="block mb-2 text-sm font-medium"
                >
                  ID Verification #
                </label>
                <input
                  type="number"
                  name="IDVerification"
                  id="IDVerification"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="12345-6789123-4"
                />
              </div>
              <div>
                <label
                  htmlFor="IDExpiryDate"
                  className="block mb-2 text-sm font-medium"
                >
                  ID Expiry Date
                </label>
                <input
                  type="date"
                  id="IDExpiryDate"
                  name="IDExpiryDate"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                />
              </div>
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
                />
              </div>
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
                >
                  <option value="citizen">Citizen</option>
                  <option value="permanentResident">Permanent Resident</option>
                  <option value="visitor">Visitor</option>
                  <option value="student">Student</option>
                  <option value="workPermit">Work Permit</option>
                  <option value="refugee">Refugee</option>
                  <option value="other">Other</option>
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
                />
              </div>
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
                />
              </div>
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
                >
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
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
                >
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
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
                  s
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="Doctor"
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
                />
              </div>
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
                />
              </div>
              <div>
                <label
                  htmlFor="smookingStatus"
                  className="block mb-2 text-sm font-medium"
                >
                  Smooking Status
                </label>
                <select
                  id="smookingStatus"
                  name="smookingStatus"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                >
                  <option value="smooker">Smooker</option>
                  <option value="non-smooking">Non-Smooker</option>
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
                >
                  <option value="drinker">Drinker</option>
                  <option value="non-drinking">Non-Drinker</option>
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
                />
              </div>
              <div>
                <label
                  htmlFor="doctorAddress"
                  className="block mb-2 text-sm font-medium"
                >
                  Doctor's Address
                </label>
                <input
                  type="text"
                  id="doctorAddress"
                  name="doctorAddress"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="#123, Street #, City"
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
                />
              </div>
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
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="anyLicenceSuspension"
                  className="block mb-2 text-sm font-medium"
                >
                  Any Licence SuspensiS
                </label>

                <select
                  name="anyLicenceSuspension"
                  id="anyLicenceSuspension"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
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
                />
              </div>
              <div>
                <label
                  htmlFor="beneficiary"
                  className="block mb-2 text-sm font-medium"
                >
                  Beneficiary
                </label>
                <input
                  type="text"
                  id="beneficiary"
                  name="beneficiary"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="John doe"
                />
              </div>
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
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                  placeholder="$100,000"
                />
              </div>
              <div>
                <label
                  htmlFor="covid"
                  className="block mb-2 text-sm font-medium"
                >
                  Covid
                </label>
                <select
                  id="covid"
                  name="covid"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
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
                />
              </div>
              <div>
                <label
                  htmlFor="signature"
                  className="block mb-2 text-sm font-medium"
                >
                  Signature
                </label>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  className="block w-full px-4 py-3 text-gray-400 border-gray-700 rounded-md focus:outline-none bg-slate-900"
                  onChange={handleChange}
                />
              </div>
              <div></div>
              <div className="flex items-end justify-center gap-8">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="max-w-[30%] overflow-y-scroll no-scrollbar">
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
                <p>SIN# : </p>
                <p>{data.SIN}</p>
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
                <p>ID Verification # : </p>
                <p>{data.IDVerification}</p>
              </div>
              <div className="flex w-full gap-4">
                <p>ID Expiry Date : </p>
                <p>{data.IDExpiryDate}</p>
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
                <p>Smooking Status : </p>
                <p>{data.smookingStatus}</p>
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
                <p>Doctor's Address : </p>
                <p>{data.doctorAddress}</p>
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
                <p>Beneficiary : </p>
                <p>{data.beneficiary}</p>
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
                <p>Covid : </p>
                <p>{data.covid}</p>
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
