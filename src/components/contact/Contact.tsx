// import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import Input from "../Input/Input/Input";
import Button from "../button/Button";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { notify } from "../../helper/Notification";

interface FormType {
  label: string;
  name: string;
}

function Contact() {
  const Form: FormType[] = [
    { label: "full name", name: "name" },
    { label: "email address", name: "email" },
    { label: "subject", name: "subject" },
    { label: "phone number", name: "phoneNumber" },
  ];

  const schema = Yup.object().shape({
    name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone Number is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: object) => {
    console.log(data);
    notify(JSON.stringify(data), "success");
  };

  return (
    <div>
      <SectionHeader title="Contact Us" />
      <form
        className="max-w-[1100px] mx-auto my-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-11 md:grid-cols-2 ">
          {Form.map((input, index) => (
            <Controller
              key={index}
              name={input.name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <Input label={input.label} {...field} />
                  <p className="text-red-500">{errors[input.name]?.message}</p>
                </div>
              )}
            />
          ))}
        </div>
        <div className="mt-8">
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Input label={"message"} {...field} />
              </div>
            )}
          />
        </div>

        <Button variant="primary" className="mt-8">
          submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
