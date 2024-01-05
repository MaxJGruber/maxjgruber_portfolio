import { useState } from "react";
import { submitForm } from "apihandlers/wufooApi";
import Notification from "@/components/ContactForm/Notification";

type FormInputs = {
  [key: string]: string;
};

const Form = ({
  text,
  notifications,
}: {
  text: ContactFormProps;
  notifications: NotificationProps;
}) => {
  const [form, setForm] = useState<FormInputs>({} as FormInputs);
  const [sentStatus, setSentStatus] = useState<Boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newForm: FormInputs = { ...form };
    const value = e.target.value;
    const key = e.target.name;
    newForm[key] = value;
    setForm(newForm);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<FormInputs | undefined> => {
    e.preventDefault();
    const response = await submitForm(form);
    if (response.Success === 1) {
      setSentStatus(true);
      resetForm();
    } else {
      setSentStatus(false);
    }
    setTimeout(() => {
      setSentStatus(null);
    }, 5000);
    return response;
  };

  const resetForm = () => {
    const newForm: FormInputs = { ...form };
    for (const key in newForm) {
      newForm[key] = "";
    }
    setForm(newForm);
  };
  return (
    <form
      action="#"
      method="POST"
      id="form"
      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div>
        <label
          htmlFor="first_name"
          className="block text-sm font-medium text-gray-900"
        >
          {text.firstName}
          <span className="text-red-400">*</span>
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="Field1"
            id="first_name"
            autoComplete="given-name"
            value={form.Field1 ? form.Field1 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last_name"
          className="block text-sm font-medium text-gray-900"
        >
          {text.lastName}
          <span className="text-red-400">*</span>
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="Field2"
            id="last_name"
            autoComplete="family-name"
            value={form.Field2 ? form.Field2 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          {text.email}
          <span className="text-red-400">*</span>
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="Field3"
            type="email"
            autoComplete="email"
            value={form.Field3 ? form.Field3 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            {text.phone}
          </label>
          <span id="phone-optional" className="text-sm text-gray-500">
            {text.optional}
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="Field10"
            id="phone"
            autoComplete="tel"
            value={form.Field10 ? form.Field10 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border-gray-300 rounded-md"
            aria-describedby="phone-optional"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900"
        >
          {text.subject}
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="Field33"
            id="subject"
            value={form.Field33 ? form.Field33 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-900"
          >
            {text.message}
            <span className="text-red-400">*</span>
          </label>
        </div>
        <div className="mt-1">
          <textarea
            id="message"
            name="Field27"
            rows={4}
            value={form.Field27 ? form.Field27 : ""}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-medium-logo-blue focus:border-medium-logo-blue border border-gray-300 rounded-md"
            aria-describedby="message-max"
          />
        </div>
      </div>
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        {sentStatus && <Notification success notifications={notifications} />}
        {sentStatus === false && (
          <Notification success={false} notifications={notifications} />
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-logo-blue hover:bg-medium-logo-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medium-logo-blue sm:w-auto"
        >
          {text.submit}
        </button>
      </div>
    </form>
  );
};

export default Form;
