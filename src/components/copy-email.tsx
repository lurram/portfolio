import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { PERSONAL_INFO } from "../constants";

type CopyStatus = "idle" | "copying" | "success";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [status, setStatus] = useState<CopyStatus>("idle");

  const handleCopy = async () => {
    if (status !== "idle") return;

    setStatus("copying");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      await navigator.clipboard.writeText(textToCopy);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("idle");
    } finally {
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={status === "copying"}
      className={`
        relative overflow-hidden min-w-[150px] px-6 py-3 rounded-xl 
        font-bold disabled:cursor-wait hover:scale-95 transition-transform active:scale-105 duration-200 shadow-sm
        ${status === "idle" ? "bg-white text-[#0d5973]" : ""}
        ${status === "success" ? "bg-emerald-600 text-white" : ""}
      `}
    >
      <div
        className={`
          absolute inset-0 transition-opacity duration-300
          ${status === "copying" ? "opacity-100" : "opacity-0 text-white"}
          bg-gradient-to-r from-white via-slate-900 to-white
          animate-gradient-x
        `}
        style={{ backgroundSize: "200% 100%" }}
      />

      <div className="relative z-10 flex items-center justify-center gap-2">
        {status === "success" ? (
          <>
            <FaCheck className="w-5 h-5 animate-bounce" />
            <span>Copiado!</span>
          </>
        ) : (
          <>
            <IoCopyOutline
              className={`w-4 h-4 ${status === "copying" ? "animate-pulse" : ""}`}
            />
            <span>
              {status === "copying" ? "Copiando..." : PERSONAL_INFO.email}
            </span>
          </>
        )}
      </div>
    </button>
  );
};

export default CopyButton;
