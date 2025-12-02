import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full bg-gray-800 text-slate-200 rounded-2xl outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-gray-800 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-2xl border-b-2 border-white"></div>
      ) : (
        <>
          Send Message{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />{" "}
        </>
      )}
    </button>
  );
}
