import React from "react";
import { FileText, Settings, Circle, CheckCircle } from "lucide-react";

export default function InputModeSelectionPole({ value, onChange }) {
  const options = [
    {
      id: "standard",
      title: "Standard Input",
      desc: "Predefined configurations for common pole types",
      icon: FileText,
    },
    {
      id: "custom",
      title: "Custom Input",
      desc: "Advanced configuration with detailed specifications",
      icon: Settings,
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = value === option.id;

          return (
            <div
              key={option.id}
              onClick={() => onChange(value === option.id ? null : option.id)}
              className={`
                relative cursor-pointer rounded-lg border p-4
                transition-all duration-200
                ${
                  isActive
                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-200"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }
              `}
            >
              {/* Circle Indicator */}
              <div className="absolute top-4 right-4">
                {isActive ? (
                  <CheckCircle size={21} className="text-blue-600" />
                ) : (
                  <Circle size={21} className="text-slate-400" />
                )}
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`
                    p-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-100 text-slate-500"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-[14px] text-slate-800">
                    {option.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 mt-1">
                    {option.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
