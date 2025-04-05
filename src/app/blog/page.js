'use client';
import ContactForm from "@/components/organisms/contact-form";

export default function Blog(params) {
  return (
    <main className="w-full pt-19">
      <div className="w-1/3 mx-auto">
        <h1 className="text-3xl font-bold mt-10">Blog</h1>
        <ContactForm />
      </div>

    </main>
  );
}