import React, { useState } from "react";

const occupations = ["Student", "Working", "GapYear", "College"];
const bootcamps = ["Kodex (Online)", "Kodr (Offline)"];
const callTimes = ["Anytime", "Morning", "Afternoon", "Evening"];
const years = ["1", "2", "3", "4", "Other"];

const initialForm = {
  occupation: "",
  bootcamp: "",
  canCall: "",
  year: "",
  name: "",
  email: "",
  contact: "",
  dob: "",
  education: "",
  institute: "",
  field: "",
  city: "",
  extraToSay: "",
};

const ContactFormSection = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm(initialForm);
  };

  return (
    <section
      id="form"
      className="relative z-0 text-gray-100 flex flex-col lg:flex-row justify-between gap-5 md:gap-14 px-4 md:px-14 md:py-28 overflow-hidden"
    >
      {/* left video */}
      <div className="absolute -left-[20%] -top-[20%] h-[90vh] aspect-square rounded-full overflow-hidden opacity-0 lg:opacity-100 -z-10">
        <div
          className="absolute inset-0 h-full w-full z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgb(0,0,0) 70%)",
          }}
        />
        <video
          className="h-full w-full object-cover"
          src="https://dfdx9u0psdezh.cloudfront.net/bootcamp/video/DotVid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* heading */}
      <h1 className="lg:w-[40%] px-0 font-sans text-left leading-tight text-[2.5rem] px-5 md:px-0 max-sm:!text-[6vw] md:!text-4xl">
        Hey! We’re Happy{" "}
        <span className="accent text-[#9685FE]">To Guide </span>
        You
        <span className="accent text-[#9685FE]">
          {" "}
          Into Becoming A Confident Engineer_
        </span>
      </h1>

      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="lg:w-1/2 space-y-5 rounded-lg border border-white/10 p-3 md:px-8 md:py-6"
      >
        {/* Occupation */}
        <div className="w-full space-y-2">
          <div className="flex flex-wrap items-center gap-3 md:gap-5 px-5">
            <h1 className="font-[bwGrad-r] text-lg md:text-2xl">Occupation</h1>
            <div className="flex flex-wrap gap-4 md:gap-5 font-[bwGrad-r]">
              {occupations.map((occ, idx) => (
                <label key={occ} className="cursor-pointer">
                  <input
                    type="radio"
                    name="occupation"
                    value={occ}
                    className="peer sr-only"
                    checked={form.occupation === occ}
                    onChange={handleChange}
                  />
                  <span className="px-6 py-1.5 max-md:text-sm rounded-full border border-white/30 transition-colors peer-checked:bg-white peer-checked:text-black hover:bg-white hover:text-black">
                    {occ}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Choose Bootcamp */}
        <SelectRow
          label="Choose Bootcamp"
          required
          name="bootcamp"
          value={form.bootcamp}
          onChange={handleChange}
          options={bootcamps}
          placeholder="Select Choose Bootcamp"
        />

        {/* Preferred Call Time */}
        <SelectRow
          label="Preferred Call Time"
          name="canCall"
          value={form.canCall}
          onChange={handleChange}
          options={callTimes}
          placeholder="Select Preferred Call Time"
        />

        {/* Graduation Year */}
        <SelectRow
          label="Graduation Year"
          name="year"
          value={form.year}
          onChange={handleChange}
          options={years}
          placeholder="Select Graduation Year"
        />

        {/* text inputs */}
        <InputRow
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Full Name"
          required
        />
        <InputRow
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />
        <InputRow
          label="Contact Number"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Enter Contact Number"
          required
        />
        <InputRow
          label="Date of Birth"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          placeholder="Enter Date of Birth"
          required
        />
        <InputRow
          label="Education"
          name="education"
          value={form.education}
          onChange={handleChange}
          placeholder="Enter Education"
          required
        />
        <InputRow
          label="College Name"
          name="institute"
          value={form.institute}
          onChange={handleChange}
          placeholder="Enter College Name"
          required
        />
        <InputRow
          label="Field Of Study"
          name="field"
          value={form.field}
          onChange={handleChange}
          placeholder="Enter Field Of Study"
          required
        />
        <InputRow
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Enter City"
          required
        />

        {/* textarea */}
        <div className="w-full space-y-2">
          <div className="flex flex-col gap-3 md:gap-5 px-5">
            <h1 className="font-[bwGrad-r] text-lg md:text-2xl">
              Anything Else You&apos;d Like to Share
            </h1>
            <textarea
              name="extraToSay"
              maxLength={300}
              value={form.extraToSay}
              onChange={handleChange}
              placeholder="Enter Anything Else You'd Like to Share"
              className="h-20 md:h-32 w-full border-b border-white/30 border-white/20 bg-transparent p-1 py-1 md:p-2 md:text-lg font-[bwGrad-r] text-white outline-none placeholder:text-white/20"
            />
          </div>
        </div>

        {/* submit */}
        <div className="px-5 pt-5">
          <button type="submit" className="w-max cursor-pointer">
            <div className="flex items-center justify-between rounded-full bg-white pl-5 pr-1 md:pl-5 md:pr-2 py-1 md:py-2 text-black">
              <h1 className="text-sm font-[bwGrad-m]">Get a Call Back</h1>
              <div className="ml-10 flex aspect-square w-10 items-center justify-center rounded-full bg-black text-white">
                →
              </div>
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

const SelectRow = ({
  label,
  required,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div className="w-full space-y-2">
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 px-5">
      <h1 className="shrink-0 font-[bwGrad-r] text-lg md:text-2xl">
        {label} {required && <span className="accent opacity-60">*</span>}
      </h1>
      <div className="rounded-full border border-white/30 pl-1 pr-3 py-1">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-max max-sm:w-full bg-transparent p-2 md:py-3 text-sm font-[bwGrad-r] text-white outline-none"
        >
          <option value="" disabled className="bg-black text-white/60">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-black text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

const InputRow = ({ label, name, value, onChange, placeholder, required }) => (
  <div className="w-full space-y-2">
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 px-5">
      <h1 className="shrink-0 font-[bwGrad-r] text-lg md:text-2xl">
        {label} {required && <span className="accent opacity-60">*</span>}
      </h1>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-white/30 bg-transparent p-1 py-1 md:p-2 md:text-lg font-[bwGrad-r] text-white outline-none placeholder:text-white/20"
        type="text"
      />
    </div>
  </div>
);

export default ContactFormSection;
