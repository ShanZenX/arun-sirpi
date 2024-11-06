import React from "react";

export default function ContactCard({ desc, Icon }) {
  return (
    <div className="h-[200px] p-10 w-9/12 md:w-1/5 flex items-center justify-center flex-col rounded-lg border-l-2 border-t-2 border-r-4 border-b-4 border-gray-500 hover:border-gray-900 ">
    <div className="inline-block mb-2">
        {Icon && <Icon className="w-6 h-6 text-gray-700" />}
    </div>
    <p>{desc}</p>
</div>

  );
}
