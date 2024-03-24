import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <div>
      <div className="bg-orange-200 min-h-screen md:px-20 ">
        <NavBar />
        <ContactForm />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Contact Us At JOBEX",
  };
}
